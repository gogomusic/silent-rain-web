"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./not-found.module.scss";

const NotFound: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`relative z-10 h-[calc(100vdh-212px)] pt-40 flex w-screen flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 404 主数字 */}
      <div className="relative mb-2 select-none">
        <h1
          className={`font-extrabold leading-none tracking-wider ${styles["text-gradient-404"]}`}
          style={{
            fontSize: "clamp(5rem, 20vw, 12rem)",
          }}
        >
          404
        </h1>
        {/* 数字底部微光 */}
        <div
          className={`absolute -bottom-4 left-1/2 h-6 w-3/4 -translate-x-1/2 blur-2xl ${styles["glow-404"]}`}
          aria-hidden="true"
        />
      </div>

      {/* 分隔线 */}
      <div
        className={`mx-auto mb-6 h-px w-16 ${styles["divider-404"]}`}
        aria-hidden="true"
      />

      {/* 提示文案 */}
      <p
        className={`mb-10 font-serif text-base tracking-[0.3em] ${styles["text-404-subtle"]} sm:text-lg`}
      >
        页面走丢了...
      </p>

      {/* 返回按钮 */}
      <Link
        href="/"
        className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-full border ${styles["border-404-border"]} px-7 py-2.5 text-sm tracking-[0.15em] ${styles["text-404-link"]} transition-all duration-500 ${
          isHovered
            ? `${styles["border-404-border-hover"]} ${styles["text-404-link-hover"]} ${styles["shadow-404-glow"]}`
            : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">返回首页</span>
        <span
          className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles["btn-glow-404"]}`}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
};

export default NotFound;
