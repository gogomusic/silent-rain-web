import Link from "next/link";
import LoginForm from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center pb-4 pt-20">
      <Card size="sm" className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>欢迎回来，请登录您的账号</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p className="w-full text-center text-sm text-muted-foreground">
            还没有账号？
            <Link
              href="/signup"
              className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              去注册
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
