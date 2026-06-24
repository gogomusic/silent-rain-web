import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { ThemeRainBg } from "./components/rain-bg/theme-rain-bg";

const notoSansSC = localFont({
  src: [
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-100.woff2",
      weight: "100",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-200.woff2",
      weight: "200",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-300.woff2",
      weight: "300",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-regular.woff2",
      weight: "400",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-500.woff2",
      weight: "500",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-600.woff2",
      weight: "600",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-700.woff2",
      weight: "700",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-800.woff2",
      weight: "800",
    },
    {
      path: "./assets/fonts/noto-sans-sc-v37-chinese-simplified/noto-sans-sc-v37-chinese-simplified-900.woff2",
      weight: "900",
    },
  ],
});

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
    <html
      lang="zh-CN"
      className={clsx("h-full antialiased", notoSansSC.className)}
      data-theme="dark"
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
        <div className="fixed top-0 left-0 -z-1 w-screen h-dvh">
          <ThemeRainBg />
        </div>
      </body>
    </html>
  );
}
