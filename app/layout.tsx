import type { Metadata } from "next";
import "./globals.css";
import { Geist, Noto_Sans_SC, Noto_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { ThemeRainBg } from "./components/rain-bg/theme-rain-bg";

const notoSerifHeading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-cn",
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
      className={cn(
        "h-full antialiased font-sans",
        geist.variable,
        notoSansSC.variable,
        notoSerifHeading.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <Header />
          <main className="flex-1 mt-18 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <div className="fixed top-0 left-0 -z-1 w-screen h-dvh">
            <ThemeRainBg />
          </div>
          {auth}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
