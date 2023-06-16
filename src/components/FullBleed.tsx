import Image from "next/image";
import React, { useContext, useEffect } from "react";
import useAnimatedValue from "~/lib/hooks/useAnimatedValue";
import { cn, projectColors } from "~/lib/utils";
import { ProjectCardsContext } from "~/contexts/ProjectCardsContext";

export type BleedProps = {
  src: string;
  title: string;
  titleColorClass?: string;
  opacity?: number;
};

export default function FullBleed({
  src,
  title,
  opacity = 0,
  titleColorClass,
}: BleedProps) {
  const [size, setSize] = useAnimatedValue(0);
  const { isOpen, setIsOpen } = useContext(ProjectCardsContext);

  const titleColor =
    titleColorClass && projectColors.includes(titleColorClass)
      ? titleColorClass
      : "text-projectfg";

  useEffect(() => {
    if (!isOpen) setSize(0, 200);
    else setSize(window.innerWidth, 500);
  }, [isOpen, setSize]);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="relative h-[100vh] rounded-full">
      <Image
        className="h-full w-full rounded-full object-cover object-center"
        src={src}
        alt="Full bleed image"
        fill
        quality={100}
        priority={true}
        sizes={"100vw"}
      />
      <h1
        className={cn(
          "absolute inset-0 flex items-center justify-center rounded-full p-4 text-center font-heading text-5xl uppercase italic [text-wrap:balance] sm:text-6xl lg:text-7xl",
          titleColor,
        )}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        }}
      >
        {title}
      </h1>
      <div
        className="pointer-events-none absolute inset-0 z-10 cursor-none"
        style={{
          backgroundImage: `radial-gradient(circle ${size}px at center, transparent 0%, transparent 95%, hsl(var(--background)) 100%)`,
        }}
      />
    </div>
  );
}
