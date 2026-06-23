"use client";

import { useEffect, useState } from "react";
import { RainBg } from "./index";

export function ThemeRainBg() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const check = () => {
      setShow(document.documentElement.getAttribute("data-theme") === "dark");
    };
    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return <RainBg />;
}
