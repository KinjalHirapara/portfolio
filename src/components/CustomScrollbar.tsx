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
      const trackHeight = trackRef.current?.getBoundingClientRect().height ?? 0;
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
    <div className="custom-scrollbar" aria-hidden="true">
      <div ref={trackRef} className="custom-scrollbar-track">
        <div ref={thumbRef} className="custom-scrollbar-thumb" />
      </div>
    </div>
  );
};

export default CustomScrollbar;
