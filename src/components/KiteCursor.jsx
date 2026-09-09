import { useState, useEffect } from 'react';

const KiteCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let lastX = 0;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      const { clientX, clientY } = e;

      // Calculate slight tilt angle based on horizontal movement
      const dx = clientX - lastX;
      lastX = clientX;

      // Tilt slightly in direction of movement
      const targetAngle = Math.max(Math.min(dx * 2, 25), -25);
      setAngle(targetAngle);

      setPos({ x: clientX, y: clientY });

      // Check if hovering over interactive element
      const target = e.target;
      const interactive = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      );
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className="relative -top-[1px] -left-[10px] transition-all duration-150"
        style={{
          transformOrigin: '10px 1px',
          transform: `rotate(${angle}deg) scale(${isHovered ? 1.25 : 1})`,
        }}
      >
        {/* Ambient Glow Halo */}
        <div
          className={`absolute -inset-2 rounded-full blur-md transition-opacity duration-300 ${
            isHovered
              ? 'bg-white/40 opacity-100 scale-125'
              : 'bg-white/20 opacity-70'
          }`}
        />

        {/* Solid Triangle SVG Cursor */}
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]"
        >
          <polygon
            points="10,1 19,20 1,20"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
};

export default KiteCursor;
