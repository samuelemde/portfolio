import { useState, useRef } from "react";

const useAnimatedValue = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);
  const animationId = useRef<number | null>(null);

  const animateValue = (
    endValue: number,
    duration: number,
    initialValue?: number,
  ) => {
    const startTime = performance.now();
    const startValue = initialValue ?? value;

    // If there's an ongoing animation, cancel it
    if (animationId.current) {
      cancelAnimationFrame(animationId.current);
    }

    let lastUpdateTime = startTime;

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Throttle state updates (every 8ms for ~120fps)
      if (currentTime - lastUpdateTime >= 8 || progress === 1) {
        setValue(startValue + progress * (endValue - startValue));
        lastUpdateTime = currentTime;
      }

      if (progress < 1) {
        animationId.current = requestAnimationFrame(animate);
      } else {
        animationId.current = null; // Reset the animation ID when animation completes
      }
    };

    animationId.current = requestAnimationFrame(animate);
  };

  return [value, animateValue, setValue] as const;
};

export default useAnimatedValue;
