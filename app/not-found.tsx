"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NotFound: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`relative z-10 flex h-dvh w-screen flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 404 主数字 */}
      <div className="relative mb-2 select-none">
        <h1
          className="font-extrabold leading-none tracking-wider"
          style={{
            fontSize: "clamp(5rem, 20vw, 12rem)",
            background:
              "linear-gradient(180deg, rgba(203,217,240,0.9) 0%, rgba(150,175,215,0.35) 60%, transparent 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>
        {/* 数字底部微光 */}
        <div
          className="absolute -bottom-4 left-1/2 h-6 w-3/4 -translate-x-1/2 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(150,175,215,0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* 分隔线 */}
      <div
        className="mx-auto mb-6 h-px w-16"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(150,175,215,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      {/* 提示文案 */}
      <p className="mb-10 font-serif text-base tracking-[0.3em] text-sky-200/50 sm:text-lg">
        页面走丢了...
      </p>

      {/* 返回按钮 */}
      <Link
        href="/"
        className="group relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-sky-200/20 px-7 py-2.5 text-sm tracking-[0.15em] text-sky-200/70 transition-all duration-500 hover:border-sky-200/40 hover:text-sky-200/90 hover:shadow-[0_0_24px_-4px_rgba(150,175,215,0.2)]"
      >
        <span className="relative z-10">返回首页</span>
        <span
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(150,175,215,0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
};

export default NotFound;
