"use client";

import React, { useState, useRef } from 'react';

export const AudioPlayer = ({ src = "/placeholder.mp3", label = "EVIDENCE TAPE · INT-04421" }: { src?: string; label?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed (needs real source):", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setCurrentTime(formatTime(current));
    setProgress((current / total) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(formatTime(audioRef.current.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    if (audioRef.current.duration) {
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  return (
    <div className="w-full max-w-[440px] bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] p-[16px_20px] relative shadow-[4px_4px_0_var(--rule)]">
      <div className="absolute top-[-1px] right-[20px] bg-[var(--paper-deep)] border-[1.5px] border-[var(--rule)] border-t-0 px-2.5 py-[3px] text-[9.5px] font-bold text-[var(--ink-soft)] tracking-[0.16em] font-mono uppercase">
        {label}
      </div>
      
      <audio 
        ref={audioRef} 
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center gap-5 mt-2.5">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause demo intake recording' : 'Play demo intake recording'}
          className="w-11 h-11 shrink-0 rounded-full border-[1.5px] border-[var(--ink)] flex items-center justify-center bg-[var(--paper)] cursor-pointer hover:bg-[var(--paper-deep)] transition-colors"
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--stamp-red)" stroke="var(--stamp-red)" strokeWidth="1.5" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--ink)" stroke="var(--ink)" strokeWidth="1.5" className="ml-1" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-mono tracking-[0.1em] text-[var(--ink-soft)] font-bold">RETELL_AI_SAMPLE.MP3</span>
            <span className="text-[10.5px] font-mono tracking-[0.06em] text-[var(--ink-soft)]">
              <span className={isPlaying ? "text-[var(--stamp-red)] font-bold" : ""}>{currentTime}</span> / {duration === "0:00" ? "2:14" : duration}
            </span>
          </div>
          
          <div 
            ref={progressRef}
            onClick={handleSeek}
            className="h-[14px] bg-[var(--paper-deep)] border-[1px] border-[var(--rule-soft)] w-full relative overflow-hidden cursor-pointer group"
          >
            {/* Grid background for tape effect */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,var(--ink)_1px,transparent_1px)] bg-[length:4px_100%]" />
            <div 
              className="absolute top-0 left-0 h-full bg-[var(--ink)] transition-all duration-75 border-r-[2px] border-[var(--stamp-red)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
