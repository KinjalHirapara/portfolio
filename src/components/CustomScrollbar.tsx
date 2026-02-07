import { useEffect, useRef } from "react";

const CustomScrollbar: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      const trackHeight =
        trackRef.current?.getBoundingClientRect().height ?? 0;
      const height = Math.max(0, Math.round(progress * trackHeight));
      if (thumbRef.current) {
        thumbRef.current.style.height = `${height}px`;
      }
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="fixed right-0 top-0 bottom-0 w-2 z-[9998] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.08)]"
      >
        <div
          ref={thumbRef}
          className="w-full rounded-full bg-[linear-gradient(180deg,rgba(240,91,42,0.95),rgba(255,170,90,0.7))] shadow-[0_0_10px_rgba(240,91,42,0.35),0_0_18px_rgba(255,170,90,0.25)] transition-[height] duration-[120ms] ease"
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;
