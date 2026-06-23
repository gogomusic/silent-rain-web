import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { ThemeRainBg } from "./components/rain-bg/theme-rain-bg";

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
