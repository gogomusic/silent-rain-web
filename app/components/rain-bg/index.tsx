"use client";

import "./animations.css";
import { Rainfall } from "@/components/rain-bg/rainfall";

interface RainBgProps {
  loading?: boolean;
}

export function RainBg({ loading }: RainBgProps) {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden bg-background">
      {/* 夜空渐层背景 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 8%, #1a2740 0%, #111c30 38%, #0a1020 72%, #060a14 100%)",
        }}
        aria-hidden="true"
      />

      {/* 月晕 */}
      <div
        className="absolute left-[68%] top-[12%] h-56 w-56 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(203,217,240,0.5) 0%, rgba(150,175,215,0.18) 45%, transparent 70%)",
          animation: "glow-pulse 7s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {loading && (
        /* 远处窗格微光 */
        <div
          className="absolute bottom-[22%] left-0 right-0 flex justify-center gap-3 opacity-70"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <span
              key={i}
              className="h-3 w-2 rounded-[1px] bg-sky-200/70"
              style={{
                animation: `flicker ${4 + (i % 3)}s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* 雨幕 */}
      <Rainfall />

      {loading && (
        /* 中央内容 */
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <p className="font-serif text-sm tracking-[0.5em] text-sky-200/60">
            加载中...
          </p>
        </div>
      )}

      {/* 底部水雾 */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(6,10,20,0.85), transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
