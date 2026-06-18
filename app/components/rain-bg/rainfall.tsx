"use client";

import { useMemo } from "react";

type Drop = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  height: number;
  opacity: number;
};

type Ripple = {
  id: number;
  left: number;
  bottom: number;
  delay: number;
  duration: number;
  size: number;
};

// 确定性伪随机，避免 SSR/CSR 水合不一致
// 固定精度，确保服务端与客户端序列化完全一致
function seeded(seed: number) {
  const x = Math.sin(seed) * 10000;
  return Math.round((x - Math.floor(x)) * 10000) / 10000;
}

export function Rainfall() {
  const drops = useMemo<Drop[]>(() => {
    return Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: seeded(i + 1) * 100,
      delay: -seeded(i + 11) * 2.4,
      duration: 0.55 + seeded(i + 23) * 0.85,
      height: 50 + seeded(i + 37) * 90,
      opacity: 0.18 + seeded(i + 51) * 0.4,
    }));
  }, []);

  const ripples = useMemo<Ripple[]>(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: seeded(i + 101) * 100,
      bottom: seeded(i + 113) * 22,
      delay: seeded(i + 127) * 3.5,
      duration: 2.6 + seeded(i + 131) * 1.8,
      size: 26 + seeded(i + 149) * 60,
    }));
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 雨丝 */}
      {drops.map((d) => (
        <span
          key={d.id}
          className="rain-drop absolute top-0 w-px rounded-full"
          style={
            {
              left: `${d.left}%`,
              height: `${d.height}px`,
              opacity: d.opacity,
              background:
                "linear-gradient(to bottom, transparent, rgba(186,205,235,0.85))",
              animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`,
              "--drop-opacity": d.opacity,
            } as React.CSSProperties
          }
        />
      ))}

      {/* 水面涟漪 */}
      <div className="absolute inset-x-0 bottom-0 h-1/3">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="rain-ripple absolute rounded-full border border-sky-200/40"
            style={{
              left: `${r.left}%`,
              bottom: `${r.bottom}%`,
              width: `${r.size}px`,
              height: `${r.size * 0.32}px`,
              animation: `ripple ${r.duration}s ease-out ${r.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
