"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";
import {
  type SubmitEvent,
  startTransition,
  useActionState,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  userControllerGetCaptcha,
  userControllerRegister,
} from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const CAPTCHA_KEY = "captcha_sent_at";
const CAPTCHA_DURATION = 60;

const signupSchema = z
  .object({
    username: z
      .string()
      .min(1, "用户名不能为空")
      .max(32, "用户名最多 32 个字符")
      .trim(),
    nickname: z
      .string()
      .min(1, "昵称不能为空")
      .max(30, "昵称最多 32 个字符")
      .trim(),
    email: z.email("邮箱格式不正确").trim(),
    password: z.string().min(6, "密码至少 6 个字符").trim(),
    confirmPassword: z.string().min(1, "请确认密码").trim(),
    captcha: z.string().length(6, "验证码未填写完整").trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次密码不一致",
    path: ["confirmPassword"],
  });

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [state, formAction, isPending] = useActionState(
    userControllerRegister,
    {
      success: true,
    },
  );
  const [countdown, setCountdown] = useState(0);
  const EmailRef = useRef<HTMLInputElement>(null);
  const submittedRef = useRef(false);

  // 注册成功后跳转
  useEffect(() => {
    if (!submittedRef.current) return;
    submittedRef.current = false;

    if (state.success) {
      toast.success("注册成功");
      router.push("/login");
    } else if (state.errorMessage) {
      toast.error(state.errorMessage as string);
    }
  }, [state, router]);

  // 页面加载时从 localStorage 恢复倒计时
  useEffect(() => {
    const saved = localStorage.getItem(CAPTCHA_KEY);
    if (!saved) return;

    const elapsed = Math.floor((Date.now() - Number(saved)) / 1000);
    const remaining = CAPTCHA_DURATION - elapsed;
    if (remaining > 0) {
      setCountdown(remaining);
    } else {
      localStorage.removeItem(CAPTCHA_KEY);
    }
  }, []);

  // 倒计时每秒递减（从 localStorage 基准时间实时计算，避免后台标签页漂移）
  useEffect(() => {
    if (countdown <= 0) return;

    const id = setInterval(() => {
      const saved = localStorage.getItem(CAPTCHA_KEY);
      if (!saved) {
        setCountdown(0);
        return;
      }

      const elapsed = Math.floor((Date.now() - Number(saved)) / 1000);
      const remaining = CAPTCHA_DURATION - elapsed;
      if (remaining <= 0) {
        localStorage.removeItem(CAPTCHA_KEY);
        setCountdown(0);
      } else {
        setCountdown(remaining);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [countdown]);

  const handleSendCaptcha = useCallback(async () => {
    // 清除 email 之前的错误状态
    setFieldErrors((prev) => {
      const { email: _removed, ...rest } = prev;
      return rest;
    });

    const email = EmailRef.current?.value;
    const emailResult = z.email().safeParse(email);
    if (!emailResult.success) {
      setFieldErrors((prev) => ({
        ...prev,
        email: [...(prev.email ?? []), "邮箱格式不正确"],
      }));
      return;
    }

    const now = Date.now();
    localStorage.setItem(CAPTCHA_KEY, String(now));
    setCountdown(CAPTCHA_DURATION);

    const { success } = await userControllerGetCaptcha(email!);
    if (success) {
      toast.success("验证码已发送至您的邮箱，请注意查收");
    }
  }, []);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = signupSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      const errors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!errors[field]) errors[field] = [];
        errors[field].push(issue.message);
      }
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    submittedRef.current = true;
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <Field data-invalid={!!fieldErrors.username}>
          <FieldLabel htmlFor="username">用户名</FieldLabel>
          <Input
            id="username"
            name="username"
            aria-invalid={!!fieldErrors.username}
            required
          />
          <FieldError
            errors={fieldErrors.username?.map((m) => ({ message: m }))}
          />
        </Field>

        <Field data-invalid={!!fieldErrors.nickname}>
          <FieldLabel htmlFor="nickname">昵称</FieldLabel>
          <Input
            id="nickname"
            name="nickname"
            aria-invalid={!!fieldErrors.nickname}
            required
          />
          <FieldError
            errors={fieldErrors.nickname?.map((m) => ({ message: m }))}
          />
        </Field>

        <Field data-invalid={!!fieldErrors.email}>
          <FieldLabel htmlFor="email">邮箱</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            aria-invalid={!!fieldErrors.email}
            ref={EmailRef}
            required
          />
          <FieldError
            errors={fieldErrors.email?.map((m) => ({ message: m }))}
          />
        </Field>

        <Field data-invalid={!!fieldErrors.password}>
          <FieldLabel htmlFor="password">密码</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            aria-invalid={!!fieldErrors.password}
            required
          />
          <FieldError
            errors={fieldErrors.password?.map((m) => ({ message: m }))}
          />
        </Field>

        <Field data-invalid={!!fieldErrors.confirmPassword}>
          <FieldLabel htmlFor="confirmPassword">确认密码</FieldLabel>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            aria-invalid={!!fieldErrors.confirmPassword}
            required
          />
          <FieldError
            errors={fieldErrors.confirmPassword?.map((m) => ({ message: m }))}
          />
        </Field>

        <Field data-invalid={!!fieldErrors.captcha}>
          <FieldLabel htmlFor="captcha">验证码</FieldLabel>

          <div className="flex gap-5">
            <InputOTP
              maxLength={6}
              id="captcha"
              name="captcha"
              className="flex-1"
              aria-invalid={!!fieldErrors.captcha}
              pattern={REGEXP_ONLY_DIGITS}
              required
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button
              type="button"
              variant="outline"
              onClick={handleSendCaptcha}
              disabled={countdown > 0}
              className="shrink-0"
            >
              {countdown > 0 ? `${countdown}s` : "发送验证码"}
            </Button>
          </div>

          <FieldError
            errors={fieldErrors.captcha?.map((m) => ({ message: m }))}
          />
        </Field>

        {state.errorMessage && (
          <p className="text-sm text-destructive">{state.errorMessage}</p>
        )}

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "提交中..." : "注册"}
        </Button>
      </FieldGroup>
    </form>
  );
};

export default SignupForm;
