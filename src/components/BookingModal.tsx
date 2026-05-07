"use client";

import React, { useEffect, useRef } from 'react';

export const BookingModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleOpen = () => dialogRef.current?.showModal();
    const handleClose = () => dialogRef.current?.close();

    window.addEventListener('open-booking-modal', handleOpen);
    window.addEventListener('close-booking-modal', handleClose);

    return () => {
      window.removeEventListener('open-booking-modal', handleOpen);
      window.removeEventListener('close-booking-modal', handleClose);
    };
  }, []);

  return (
    <dialog 
      ref={dialogRef}
      className="backdrop:bg-[var(--bg)]/80 backdrop:backdrop-blur-sm bg-transparent p-0 m-auto border-none open:flex flex-col w-[90%] max-w-[800px]"
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <div className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] relative w-full overflow-hidden shadow-[12px_12px_0_var(--rule)]">
        <div className="bg-[var(--paper-edge)] border-b border-[var(--rule)] px-4 py-3 flex justify-between items-center">
          <div className="text-[10px] font-bold text-[var(--ink)] tracking-[0.16em] font-mono uppercase">
            CAL.COM / DISCOVERY
          </div>
          <button 
            onClick={() => dialogRef.current?.close()}
            className="w-6 h-6 border-[1.5px] border-[var(--rule)] flex items-center justify-center bg-[var(--paper)] cursor-pointer hover:bg-[var(--paper-deep)] transition-colors"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="p-8 md:p-12 min-h-[500px] flex items-center justify-center">
          <div className="text-center w-full">
            <div className="text-[28px] font-semibold text-[var(--ink)] font-serif tracking-[-0.015em] mb-3">Book a Discovery Call</div>
            <div className="text-[14px] text-[var(--ink-soft)] font-serif italic mb-10 max-w-[420px] mx-auto leading-[1.6]">
              Twenty-minute conversation. No pitch deck. We'll walk you through the dossier and let you hear Della work.
            </div>
            
            {/* Cal.com Embed Placeholder */}
            <div className="w-full max-w-[600px] mx-auto h-[380px] border-[1.5px] border-dashed border-[var(--rule-soft)] bg-[var(--paper-edge)] flex items-center justify-center">
              <span className="text-[11px] font-mono tracking-[0.1em] text-[var(--ink-soft)] font-bold">[CAL.COM IFRAME PLACEMENT]</span>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export const openBookingModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-booking-modal'));
  }
};
