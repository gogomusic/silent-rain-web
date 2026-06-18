import type { Metadata } from "next";
import "./globals.css";
import { RainBg } from "./components/rain-bg";

export const metadata: Metadata = {
  title: "静夜聆雨",
  description: "静夜聆雨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" data-theme="dark">
      <body className="min-h-full">
        {children}
        <div className="fixed top-0 left-0 -z-1 w-screen h-dvh">
          <RainBg />
        </div>
      </body>
    </html>
  );
}
