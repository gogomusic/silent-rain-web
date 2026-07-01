"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./error.module.scss";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="zh-CN">
      <body className="m-0 h-[calc(100vdh-212px)] pt-40 bg-background">
        <div
          className={`relative z-10 flex h-dvh w-full flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* 夜空渐层背景 */}
          <div
            className={`absolute inset-0 -z-10 ${styles["bg-error-sky"]}`}
            aria-hidden="true"
          />

          {/* 错误符号 */}
          <div className="relative mb-2 select-none">
            <h1
              className={`font-extrabold leading-none tracking-wider ${styles["text-gradient-error"]}`}
              style={{
                fontSize: "clamp(5rem, 20vw, 12rem)",
              }}
            >
              !
            </h1>
            {/* 符号底部微光 */}
            <div
              className={`absolute -bottom-4 left-1/2 h-6 w-1/2 -translate-x-1/2 blur-2xl ${styles["glow-error"]}`}
              aria-hidden="true"
            />
          </div>

          {/* 分隔线 */}
          <div
            className={`mx-auto mb-6 h-px w-16 ${styles["divider-error"]}`}
            aria-hidden="true"
          />

          {/* 提示文案 */}
          <p
            className={`mb-10 font-serif text-base tracking-[0.3em] ${styles["text-error-subtle"]} sm:text-lg`}
          >
            出了点小意外，请稍后再试
          </p>

          {/* 操作按钮 */}
          <div className="flex gap-4">
            <Link
              href="/"
              className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-full border ${styles["border-error-border"]} px-7 py-2.5 text-sm tracking-[0.15em] ${styles["text-error-link"]} transition-all duration-500 ${
                isHovered === "home"
                  ? `${styles["border-error-border-hover"]} ${styles["text-error-link-hover"]} ${styles["shadow-error-glow"]}`
                  : ""
              }`}
              onMouseEnter={() => setIsHovered("home")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="relative z-10">返回首页</span>
              <span
                className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles["btn-glow-error"]}`}
                aria-hidden="true"
              />
            </Link>
            <button
              type="button"
              onClick={reset}
              className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-full border ${styles["border-error-border"]} px-7 py-2.5 text-sm tracking-[0.15em] ${styles["text-error-link"]} transition-all duration-500 ${
                isHovered === "retry"
                  ? `${styles["border-error-border-hover"]} ${styles["text-error-link-hover"]} ${styles["shadow-error-glow"]}`
                  : ""
              }`}
              onMouseEnter={() => setIsHovered("retry")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="relative z-10">重试</span>
              <span
                className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles["btn-glow-error"]}`}
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
