import { useRef } from "react";
import { usePointerDot } from "../hooks/usePointerDot";

const PointerDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const { isFinePointer } = usePointerDot(dotRef);

  if (!isFinePointer) {
    return null;
  }

  return (
    <div
      ref={dotRef}
      className="fixed z-[9999] h-2 w-2 rounded-full bg-primary pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-[160ms] shadow-[0_0_10px_rgba(240,91,42,0.6),0_0_22px_rgba(240,91,42,0.35)]"
      aria-hidden="true"
    />
  );
};

export default PointerDot;
