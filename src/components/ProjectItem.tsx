import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import { ProjectCardsContext } from "~/contexts/ProjectCardsContext";
import { cn } from "~/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useRouter } from "next/router";
import { HeaderContext } from "~/contexts/HeaderContext";
import { useVisibilityCheck } from "~/lib/hooks/useVisibilityCheck";

export type ProjectItemProps = {
  src: string;
  title: string;
  href: string;
};

export default function ProjectItem({ src, title, href }: ProjectItemProps) {
  const router = useRouter();
  const { animate } = useContext(HeaderContext);
  const { isOpen, setIsOpen } = useContext(ProjectCardsContext);

  const itemRef = useRef(null);
  const isVisible = useVisibilityCheck(itemRef);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    animate();
    setIsOpen(false);
    setTimeout(() => void router.push(href), 700);
  };

  return (
    <AspectRatio
      ref={itemRef}
      ratio={1}
      className="group relative h-0 w-full min-w-[300px] overflow-hidden rounded-full pb-[100%]"
    >
      <div
        className={cn(
          "transition-border pointer-events-none absolute inset-0 left-[50%] top-[50%] z-10 h-full w-full translate-x-[-50%] translate-y-[-50%] transform cursor-none rounded-full border-[50cqw] border-background duration-700 md:border-[30cqw] lg:border-[20cqw]",
          { "border-0 md:border-0 lg:border-0": isOpen },
        )}
      />
      <Image
        src={src}
        alt={title}
        fill
        className="rounded-full object-cover p-px"
        sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div
        className={cn(
          "absolute inset-px rounded-full bg-black bg-opacity-0 transition group-hover:bg-opacity-25",
          { "bg-opacity-25 sm:bg-opacity-0": isVisible },
        )}
      />
      <Link
        href="#"
        className={cn(
          "absolute inset-0 flex cursor-pointer items-center justify-center rounded-full opacity-0 transition group-hover:opacity-100",
          { "opacity-100 sm:opacity-0": isVisible },
        )}
        onClick={(event) => handleClick(event, href)}
      >
        <h3 className="whitespace-pre-line text-center font-heading text-3xl font-bold uppercase italic text-projectfg">
          {title}
        </h3>
      </Link>
    </AspectRatio>
  );
}
