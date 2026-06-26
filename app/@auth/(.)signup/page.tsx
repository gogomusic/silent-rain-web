"use client";

import { useRouter } from "next/navigation";
import SignupForm from "@/components/auth/signup-form";
import { CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Signup() {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>注册</DialogTitle>
          <CardDescription>创建一个新账号开始使用</CardDescription>
        </DialogHeader>
        <SignupForm />
        <DialogFooter>
          <p className="w-full text-center text-sm text-muted-foreground">
            已有账号？
            <button
              onClick={() => router.replace("/login")}
              type="button"
              className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              去登录
            </button>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
