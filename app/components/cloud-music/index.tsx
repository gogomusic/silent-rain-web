"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/audio/quiet-rain.mp3";

const CloudMusic: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [dark, setDark] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(false);

  useEffect(() => {
    const isDark = () =>
      document.documentElement.getAttribute("data-theme") !== "light";

    setDark(isDark());

    audioRef.current = new Audio(MUSIC_SRC);
    audioRef.current.loop = true;

    const audio = audioRef.current;

    if (isDark()) {
      audio.play().catch(() => {});
      setPlaying(true);
      playingRef.current = true;
    }

    const observer = new MutationObserver(() => {
      const nowDark = isDark();
      setDark(nowDark);

      if (nowDark && audio.paused) {
        audio.play().catch(() => {});
        setPlaying(true);
        playingRef.current = true;
      } else if (!nowDark) {
        audio.pause();
        setPlaying(false);
        playingRef.current = false;
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingRef.current) {
      audio.pause();
      playingRef.current = false;
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      playingRef.current = true;
      setPlaying(true);
    }
  }, []);

  if (!dark) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-foreground/10 hover:text-foreground"
      aria-label={playing ? "关闭音乐" : "播放音乐"}
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6.5 2v8.3A2.5 2.5 0 1 0 8 12.5V5.5l5-1v3.3A2.5 2.5 0 1 0 14 9.5V1L6.5 2z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        {playing && (
          <line
            x1="2"
            y1="14"
            x2="14"
            y2="2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}
      </svg>
    </button>
  );
};

export default CloudMusic;
