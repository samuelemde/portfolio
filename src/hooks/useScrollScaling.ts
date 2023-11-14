import { useEffect } from "react";
import useAnimatedValue from "~/hooks/useAnimatedValue";

export default function useScrollScaling(
  enabled: boolean,
  minValue: number,
  maxValue: number,
  defaultValue = 40,
) {
  const [value, animateValue, setValue] = useAnimatedValue(defaultValue);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!enabled) return;
      const delta = e.deltaY * 0.2;
      const newValue = Math.max(minValue, Math.min(maxValue, value + delta));
      setValue(newValue);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [value, setValue, enabled, minValue, maxValue]);

  return [value, animateValue, setValue] as const;
}
