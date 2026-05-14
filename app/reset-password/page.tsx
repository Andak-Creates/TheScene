"use client";

import { useEffect, useState } from "react";

export default function ResetPasswordBridge() {
  const [deepLink, setDeepLink] = useState("thescene://reset-password");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the user is on a mobile device
    const userAgent = navigator.userAgent || navigator.vendor;
    if (!/android|iphone|ipad|ipod/i.test(userAgent.toLowerCase())) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(false);
    }

    // Grab all query parameters and hash fragments
    const searchParams = window.location.search;
    const hashParams = window.location.hash;
    
    // Construct the deep link to pass exactly what Supabase sent us
    setDeepLink(`thescene://reset-password${searchParams}${hashParams}`);

    // If on mobile, we can automatically try to redirect after a short delay
    if (/android|iphone|ipad|ipod/i.test(userAgent.toLowerCase())) {
      setTimeout(() => {
        window.location.href = `thescene://reset-password${searchParams}${hashParams}`;
      }, 1500);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-center">
        {/* Logo Placeholder - Assuming you have an icon.png in public */}
        <div className="w-20 h-20 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
          <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-3">Reset Password</h1>
        
        {isMobile ? (
          <>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Redirecting you securely to the TheScene app...
            </p>
            
            <a 
              href={deepLink}
              className="block w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors text-white font-bold text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] mb-4"
            >
              Open App Manually
            </a>
            <p className="text-xs text-gray-500">
              If the app doesn&apos;t open automatically, tap the button above.
            </p>
          </>
        ) : (
          <>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-6 text-left">
              <p className="text-orange-400 text-sm font-medium mb-1 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Mobile Device Required
              </p>
              <p className="text-orange-200/80 text-sm">
                You opened this link on a computer, but password resets must be completed inside the mobile app.
              </p>
            </div>
            
            <p className="text-gray-300 font-medium bg-white/5 py-4 px-6 rounded-xl border border-white/10 inline-block">
              Please open this email on your phone and tap the link again.
            </p>
          </>
        )}
      </div>

      <div className="mt-8 text-gray-500 text-sm font-medium">
        TheScene App • Secure Authentication
      </div>
    </main>
  );
}
