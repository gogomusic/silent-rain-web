"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RainBg } from "./index";

export function ThemeRainBg() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (resolvedTheme !== "dark") return null;

  return <RainBg />;
}
