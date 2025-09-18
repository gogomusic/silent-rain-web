"use client";

import React, { useEffect, useState } from "react";

const MUSIC_SRC =
  "//music.163.com/outchain/player?type=0&id=13897685093&auto=1&height=90";

const ConfirmDialog: React.FC<{
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ message, onConfirm, onCancel }) => (
  <div
    style={{
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: "#fff",
        padding: 24,
        borderRadius: 8,
        minWidth: 260,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 16 }}>{message}</div>
      <button onClick={onConfirm} style={{ marginRight: 12 }}>
        允许
      </button>
      <button onClick={onCancel}>取消</button>
    </div>
  </div>
);

const CloudMusic: React.FC = () => {
  const [canAutoplay, setCanAutoplay] = useState<boolean | null>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const audio = document.createElement("audio");
    audio.src = "https://music.163.com/song/media/outer/url?id=2657683858.mp3";
    audio.muted = true;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setCanAutoplay(true);
        })
        .catch(() => {
          setCanAutoplay(false);
        });
    } else {
      setCanAutoplay(false);
    }
  }, []);

  useEffect(() => {
    if (canAutoplay === true) {
      setShowIframe(true);
    }
    if (canAutoplay === false) {
      setShowDialog(true);
    }
  }, [canAutoplay]);

  const handleConfirm = () => {
    setShowIframe(true);
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowIframe(false);
    setShowDialog(false);
  };

  if (showDialog) {
    return (
      <ConfirmDialog
        message="是否播放音乐以获得最佳用户体验？"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    );
  }

  if (!showIframe) return null;

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
