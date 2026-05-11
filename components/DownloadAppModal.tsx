"use client";

import React, { useState, useEffect } from "react";

const DownloadAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown in this session
    const hasShown = sessionStorage.getItem("hasShownDownloadModal");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasShownDownloadModal", "true");
      }, 1500); // Show after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-theme-bg/80 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-theme-surface border border-theme-border rounded-[2.5rem] p-8 sm:p-12 shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-theme-muted hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center relative z-10">
          <div className="w-20 h-20 bg-theme-purple/20 border-2 border-theme-purple rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
            <svg className="w-10 h-10 text-theme-purple" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4 tracking-tight">
            Ticket Secured! 🎉
          </h2>
          <p className="text-theme-muted text-lg mb-10 leading-relaxed">
            Download <span className="text-white font-bold">TheScene</span> app to view your tickets anytime, get entry notifications, and discover the next big move.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
              {/* Apple App Store Button */}
              <a
                href="https://apps.apple.com/ng/app/thescene-nightlife-discovery/id6760138122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 bg-theme-purple/90 border border-theme-purple rounded-2xl text-white hover:bg-theme-purple active:scale-95 transition-all duration-300 w-full sm:flex-1 overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <svg
                  viewBox="0 0 384 512"
                  className="h-5 w-5 fill-current relative z-10"
                  aria-hidden="true"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start leading-[1.1] relative z-10 pt-0.5 text-left">
                  <span className="text-[10px] font-medium text-white/80 tracking-wide uppercase">
                    Download on the
                  </span>
                  <span className="text-lg font-semibold tracking-tight">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.vindi.thescene"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white/5 border border-white/20 rounded-2xl text-white hover:bg-white/10 hover:border-white/30 active:scale-95 transition-all duration-300 w-full sm:flex-1 overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <svg
                  viewBox="0 0 512 512"
                  className="h-5 w-5 fill-current relative z-10"
                  aria-hidden="true"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start leading-[1.1] relative z-10 pt-0.5 text-left">
                  <span className="text-[10px] font-medium text-white/70 tracking-wide uppercase">
                    GET IT ON
                  </span>
                  <span className="text-lg font-semibold tracking-tight">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 text-theme-muted hover:text-white transition-colors text-sm font-medium"
            >
              Continue to ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppModal;
