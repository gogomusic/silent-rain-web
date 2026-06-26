"use client";

import { useRouter } from "next/navigation";
import LoginForm from "@/components/auth/login-form";
import { CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Login() {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登录</DialogTitle>
          <CardDescription>欢迎回来，请登录您的账号</CardDescription>
        </DialogHeader>
        <LoginForm />
        <DialogFooter>
          <p className="w-full text-center text-sm text-muted-foreground">
            还没有账号？
            <button
              onClick={() => router.replace("/signup")}
              type="button"
              className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              去注册
            </button>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
