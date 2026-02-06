import { useEffect, useMemo, useRef } from "react";

const PointerDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const visibleRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });

  const isFinePointer = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }
    if (!window.matchMedia) {
      return true;
    }
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return;
    }

    const update = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const ease = 0.08;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      currentRef.current = current;
      if (dotRef.current) {
        dotRef.current.style.left = `${current.x}px`;
        dotRef.current.style.top = `${current.y}px`;
      }
      frameRef.current = requestAnimationFrame(update);
    };

    const handleMove = (event: MouseEvent | PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      if (!visibleRef.current) {
        currentRef.current = { ...targetRef.current };
        if (dotRef.current) {
          dotRef.current.style.left = `${targetRef.current.x}px`;
          dotRef.current.style.top = `${targetRef.current.y}px`;
          dotRef.current.classList.add("is-visible");
        }
        visibleRef.current = true;
      }
    };

    const handleLeave = () => {
      if (dotRef.current) {
        dotRef.current.classList.remove("is-visible");
      }
      visibleRef.current = false;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    window.addEventListener("mouseleave", handleLeave);
    frameRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("mouseleave", handleLeave);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <div ref={dotRef} className="pointer-dot" aria-hidden="true" />
  );
};

export default PointerDot;
