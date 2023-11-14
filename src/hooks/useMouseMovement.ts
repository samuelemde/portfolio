import { useState, useEffect } from "react";

export default function useMouseMovement(enabled: boolean) {
  const [coordinates, setCoordinates] = useState({ x: -100, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!enabled) {
        setCoordinates({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled]);

  return { coordinates, setCoordinates };
}
