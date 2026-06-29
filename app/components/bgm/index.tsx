"use client";

import { Music } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MUSIC_SRC = "/audio/quiet-rain.mp3";

const Bgm: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_SRC);
    audioRef.current.loop = true;

    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, []);

  // Sync playback pause with theme changes (no auto-play)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !mounted) return;

    if (resolvedTheme !== "dark" && playingRef.current) {
      audio.pause();
      playingRef.current = false;
      setPlaying(false);
    }
  }, [resolvedTheme, mounted]);

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

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={playing ? "关闭音乐" : "播放音乐"}
    >
      <Music
        data-icon
        className={cn("transition-all", playing && "text-primary")}
      />
    </Button>
  );
};

export default Bgm;
