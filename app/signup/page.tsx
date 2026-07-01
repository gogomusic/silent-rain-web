import Link from "next/link";
import SignupForm from "@/components/auth/signup-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex items-center justify-center pb-4 pt-10">
      <Card size="sm" className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>注册账号</CardTitle>
          <CardDescription>创建一个新账号开始使用</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter>
          <p className="w-full text-center text-sm text-muted-foreground">
            已有账号？
            <Link
              href="/login"
              className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              去登录
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
