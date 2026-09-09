import { useState } from 'react';

const KiteLaunchButton = () => {
  const [isFlying, setIsFlying] = useState(false);

  const launchFlight = (e) => {
    if (e) e.preventDefault();
    if (isFlying) return;

    setIsFlying(true);

    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset flight animation after sequence completes
    setTimeout(() => {
      setIsFlying(false);
    }, 1500);
  };

  return (
    <>
      {/* Centered at the bottom below: Solid Triangle + mini text "fly with me" */}
      <div className="pt-2 pb-4 px-4 flex flex-col items-center justify-center text-center">
        <button
          type="button"
          onClick={launchFlight}
          disabled={isFlying}
          aria-label="Fly to top"
          className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 p-3 select-none"
        >
          {/* Solid Triangle matching the cursor */}
          <div className="relative transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 active:scale-90">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 rounded-full bg-white/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <svg
              width="22"
              height="24"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.75)] group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,1)] transition-all duration-300"
            >
              <polygon points="10,1 19,20 1,20" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Mini Text below it: "fly with me" */}
          <span className="text-[11px] font-mono lowercase tracking-widest text-neutral-400 group-hover:text-white transition-colors duration-300">
            fly with me
          </span>
        </button>
      </div>

      {/* Supersonic Light Wave Flight Animation Overlay */}
      {isFlying && (
        <div
          className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden flex items-center justify-center"
          aria-hidden="true"
        >
          {/* Luminous Light Wave sweeping upward */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-light-wave" />

          {/* Soaring Supersonic Solid Triangle Rocket */}
          <div className="absolute flex flex-col items-center animate-plane-soar">
            <div className="relative">
              {/* Core Glow Aura */}
              <div className="absolute -inset-6 rounded-full bg-white/35 blur-xl animate-pulse" />

              <svg
                width="64"
                height="74"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative drop-shadow-[0_0_35px_rgba(255,255,255,1)]"
              >
                <polygon points="10,1 19,20 1,20" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Glowing Light Trail Stream */}
            <div className="w-1.5 h-64 bg-gradient-to-b from-white via-white/40 to-transparent blur-[1px] shadow-[0_0_25px_#ffffff]" />
            <div className="w-8 h-48 bg-gradient-to-b from-white/30 to-transparent blur-md -mt-64" />
          </div>
        </div>
      )}
    </>
  );
};

export default KiteLaunchButton;
