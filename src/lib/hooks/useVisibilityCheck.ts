// hooks/useVisibilityCheck.js
import { useEffect, useState } from "react";

function isElementFullyVisible(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

export function useVisibilityCheck(ref: React.RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current && isElementFullyVisible(ref.current)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    checkVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [ref]);

  return isVisible;
}
