"use client";

import React, { useContext, useEffect } from "react";
import { cn } from "~/lib/utils";
import { colorOptions } from "~/lib/data/colorOptions";
import Image, { type StaticImageData } from "next/image";
import { AppContext } from "~/contexts/AppContext";
import { useSearchParams } from "next/navigation";
import { HeaderContext } from "~/contexts/HeaderContext";
import { useTheme } from "next-themes";

export type BleedProps = {
  src: string | StaticImageData;
  title: string;
  opacity?: number;
};

export default function FullBleed({ src, title, opacity = 0 }: BleedProps) {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const { fullBleedExpanded, setFullBleedExpanded } = useContext(AppContext);
  const { headerColor } = useContext(HeaderContext);

  const queryColor = searchParams.get("titleColor");
  const titleColor =
    colorOptions[
      theme === "neon" ? queryColor ?? headerColor ?? "project" : "project"
    ];

  useEffect(() => {
    setFullBleedExpanded(true);
  }, []);

  return (
    <div className="relative h-[100vh] w-full rounded-full">
      <Image
        className="h-full w-auto rounded-full object-cover object-center p-px"
        src={src}
        alt="Full bleed image"
        fill
        quality={100}
        priority={true}
        sizes={"100vh"}
      />
      <h1
        dangerouslySetInnerHTML={{ __html: title }}
        className={cn(
          "absolute inset-0 flex items-center justify-center rounded-full p-4 text-center font-heading text-5xl uppercase italic [text-wrap:balance] sm:text-6xl lg:text-7xl",
          titleColor,
        )}
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 left-[50%] top-[50%] z-10 h-full w-full translate-x-[-50%] translate-y-[-50%] transform cursor-none rounded-full border-[50cqw] border-background transition-border duration-700",
          { "border-0": fullBleedExpanded },
        )}
      />
    </div>
  );
}
