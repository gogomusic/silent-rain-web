"use client";

import type React from "react";
import { useCallback, useState } from "react";

const MUSIC_SRC =
  "//music.163.com/outchain/player?type=0&id=13897685093&auto=1&height=90";

/** 底部提示条 */
const ConfirmToast: React.FC<{
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ message, onConfirm, onCancel }) => (
  <div className="fixed bottom-5 right-3 z-9999 animate-in slide-in-from-right-4 fade-in duration-300">
    <div className="flex w-72 items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-xl ring-1 ring-black/5">
      <span className="shrink-0 text-lg">🎵</span>
      <p className="flex-1 text-xs text-gray-600 leading-relaxed">{message}</p>
      <div className="flex shrink-0 gap-1.5">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-500 active:scale-95"
        >
          忽略
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="cursor-pointer rounded-lg bg-gray-800 px-2.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-gray-700 active:scale-95"
        >
          播放
        </button>
      </div>
    </div>
  </div>
);

const CloudMusic: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleConfirm = useCallback(() => {
    setShowIframe(true);
  }, []);

  const handleCancel = useCallback(() => {
    setDismissed(true);
  }, []);

  if (dismissed) return null;

  if (!showIframe) {
    return (
      <ConfirmToast
        message="播放背景音乐？"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <div className="fixed bottom-3 right-3">
      <iframe
        className="border-0 m-0"
        width={330}
        height={110}
        src={MUSIC_SRC}
        title="Cloud Music"
      ></iframe>
    </div>
  );
};

export default CloudMusic;
