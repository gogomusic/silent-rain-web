import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Noto_Sans_SC } from "next/font/google";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { ThemeRainBg } from "./components/rain-bg/theme-rain-bg";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "静夜聆雨",
  description: "静夜聆雨",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
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
        {auth}
      </body>
    </html>
  );
}
