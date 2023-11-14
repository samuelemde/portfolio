import Link from "next/link";
import { cn } from "~/lib/utils";
import React, { useEffect, useState } from "react";
import { colorOptions } from "~/lib/data/colorOptions";
import { type LinkType } from "~/lib/types";
import { useTheme } from "next-themes";

type ProjectLinkProps = {
  link: LinkType;
  col: number;
  row: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: (
    e: React.MouseEvent<Element, MouseEvent>,
    href: string,
    color: number,
  ) => void;
};

export default function ProjectLink({
  link,
  col,
  row,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ProjectLinkProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link
      dangerouslySetInnerHTML={{ __html: link.title }}
      key={link.title}
      href={link.href}
      className={cn(
        "col-span-2 cursor-none p-0 font-heading text-xl font-bold uppercase transition-all duration-700 ease-in-out hover:-skew-x-[22deg] md:text-2xl lg:text-3xl",
        { "break-words": col === 7 },
        colorOptions[theme === "neon" ? row : "inverse"], // if theme is neon, use multiple colors, else just use inverse
      )}
      style={{
        gridRowStart: row,
        gridColumnStart: col,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(event) => onClick(event, link.href, row)}
    />
  );
}
