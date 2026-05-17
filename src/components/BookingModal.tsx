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
      className="backdrop:bg-[var(--bg)]/80 backdrop:backdrop-blur-sm bg-transparent p-0 m-auto border-none open:flex flex-col w-[95%] max-w-[920px] h-[90vh] max-h-[800px]"
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <div className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] relative w-full h-full flex flex-col overflow-hidden shadow-[12px_12px_0_var(--rule)]">
        <div className="bg-[var(--paper-edge)] border-b border-[var(--rule)] px-4 py-3 flex justify-between items-center shrink-0">
          <div className="text-[10px] font-bold text-[var(--ink)] tracking-[0.16em] font-mono uppercase">
            CAL.COM / DISCOVERY
          </div>
          <button
            onClick={() => dialogRef.current?.close()}
            aria-label="Close booking modal"
            className="w-6 h-6 border-[1.5px] border-[var(--rule)] flex items-center justify-center bg-[var(--paper)] cursor-pointer hover:bg-[var(--paper-deep)] transition-colors"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <iframe
          src="https://cal.com/antek-automation/30min-gmail?embed=true&hideEventTypeDetails=false&layout=month_view"
          title="Book a discovery call with Call Della"
          className="flex-grow w-full border-0 bg-[var(--paper)]"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen"
        />
      </div>
    </dialog>
  );
};

export const openBookingModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-booking-modal'));
  }
};
