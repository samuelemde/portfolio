import Image from "next/image";
import React, { useContext, useEffect } from "react";
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
  const { isOpen, setIsOpen } = useContext(ProjectCardsContext);

  const titleColor =
    titleColorClass && projectColors.includes(titleColorClass)
      ? titleColorClass
      : "text-projectfg";

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="relative h-[100vh] rounded-full">
      <Image
        className="h-full w-full rounded-full object-cover object-center p-px"
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
        className={cn(
          "transition-border pointer-events-none absolute inset-0 left-[50%] top-[50%] z-10 h-full w-full translate-x-[-50%] translate-y-[-50%] transform cursor-none rounded-full border-[50cqw] border-background duration-700",
          { "border-0": isOpen },
        )}
      />
    </div>
  );
}
