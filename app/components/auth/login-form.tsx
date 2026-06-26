"use client";

import { useRouter } from "next/navigation";
import {
  type SubmitEvent,
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import { z } from "zod";
import { userControllerLogin } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  username: z.string().min(1, "用户名/邮箱不能为空").trim(),
  password: z.string().min(1, "密码不能为空").trim(),
});

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [state, formAction, isPending] = useActionState(userControllerLogin, {
    success: true,
  });
  const submittedRef = useRef(false);

  // 登录成功后跳转
  useEffect(() => {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    if (state.success) {
      toast.success("登录成功");
      router.push("/");
    } else if (state.errorMessage) {
      toast.error(state.errorMessage as string);
    }
  }, [state, router]);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = loginSchema.safeParse(Object.fromEntries(formData));

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
          <FieldLabel htmlFor="username">用户名/邮箱</FieldLabel>
          <Input
            id="username"
            name="username"
            type="username"
            aria-invalid={!!fieldErrors.username}
            required
          />
          <FieldError
            errors={fieldErrors.username?.map((m) => ({ message: m }))}
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

        {state.errorMessage && (
          <p className="text-sm text-destructive">{state.errorMessage}</p>
        )}

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "登录中..." : "登录"}
        </Button>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
