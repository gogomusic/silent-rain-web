"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="zh-CN">
      <body className="m-0 min-h-dvh bg-background">
        <div
          className={`relative z-10 flex h-dvh w-screen flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* 夜空渐层背景 */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(120% 90% at 70% 8%, #1a2740 0%, #111c30 38%, #0a1020 72%, #060a14 100%)",
            }}
            aria-hidden="true"
          />

          {/* 错误符号 */}
          <div className="relative mb-2 select-none">
            <h1
              className="font-extrabold leading-none tracking-wider"
              style={{
                fontSize: "clamp(5rem, 20vw, 12rem)",
                background:
                  "linear-gradient(180deg, rgba(240,203,203,0.9) 0%, rgba(215,150,150,0.35) 60%, transparent 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              !
            </h1>
            {/* 符号底部微光 */}
            <div
              className="absolute -bottom-4 left-1/2 h-6 w-1/2 -translate-x-1/2 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(215,150,150,0.3) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* 分隔线 */}
          <div
            className="mx-auto mb-6 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(215,150,150,0.4), transparent)",
            }}
            aria-hidden="true"
          />

          {/* 提示文案 */}
          <p className="mb-10 font-serif text-base tracking-[0.3em] text-rose-200/50 sm:text-lg">
            出了点小意外，请稍后再试
          </p>

          {/* 操作按钮 */}
          <div className="flex gap-4">
            <Link
              href="/"
              className="group relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-rose-200/20 px-7 py-2.5 text-sm tracking-[0.15em] text-rose-200/70 transition-all duration-500 hover:border-rose-200/40 hover:text-rose-200/90 hover:shadow-[0_0_24px_-4px_rgba(215,150,150,0.2)]"
            >
              <span className="relative z-10">返回首页</span>
              <span
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(215,150,150,0.08) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
            </Link>
            <button
              type="button"
              onClick={reset}
              className="group relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-rose-200/20 px-7 py-2.5 text-sm tracking-[0.15em] text-rose-200/70 transition-all duration-500 hover:border-rose-200/40 hover:text-rose-200/90 hover:shadow-[0_0_24px_-4px_rgba(215,150,150,0.2)]"
            >
              <span className="relative z-10">重试</span>
              <span
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(215,150,150,0.08) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
