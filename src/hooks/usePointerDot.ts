import { useEffect, useState, useRef } from "react";
import type { RefObject } from "react";

const getFinePointer = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (!window.matchMedia) {
    return true;
  }
  return window.matchMedia("(any-hover: hover) and (any-pointer: fine)")
    .matches;
};

export const usePointerDot = (dotRef: RefObject<HTMLDivElement | null>) => {
  const [isFinePointer, setIsFinePointer] = useState(() => getFinePointer());
  const visibleRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const media = window.matchMedia(
      "(any-hover: hover) and (any-pointer: fine)"
    );
    const handleChange = () => setIsFinePointer(media.matches);
    handleChange();
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }
    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return;
    }

    const visibleClass = "opacity-100";
    const hiddenClass = "opacity-0";

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
      currentRef.current = visibleRef.current
        ? currentRef.current
        : { ...targetRef.current };
      if (dotRef.current) {
        dotRef.current.style.left = `${targetRef.current.x}px`;
        dotRef.current.style.top = `${targetRef.current.y}px`;
        dotRef.current.classList.remove(hiddenClass);
        dotRef.current.classList.add(visibleClass);
      }
      visibleRef.current = true;
    };

    const handleLeave = () => {
      if (dotRef.current) {
        dotRef.current.classList.remove(visibleClass);
        dotRef.current.classList.add(hiddenClass);
      }
      visibleRef.current = false;
    };

    const handleVisibility = () => {
      if (document.visibilityState !== "visible") {
        handleLeave();
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    frameRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isFinePointer, dotRef]);

  return { isFinePointer };
};
