import Image from "next/image";
import Link from "next/link";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ProjectCardsContext } from "~/contexts/ProjectCardsContext";
import { cn } from "~/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useRouter } from "next/router";

export type ProjectItemProps = {
  src: string;
  title: string;
  href: string;
};

export default function ProjectItem({ src, title, href }: ProjectItemProps) {
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(ProjectCardsContext);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => void router.push(href), 700);
  };

  return (
    <AspectRatio
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
        className="rounded-full object-cover p-1"
        sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-1 rounded-full bg-black bg-opacity-0 transition group-hover:bg-opacity-20" />
      <Link
        href="#"
        className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full opacity-0 transition group-hover:opacity-100"
        onClick={(event) => handleClick(event, href)}
      >
        <h3 className="whitespace-pre-line text-center font-heading text-3xl font-bold uppercase italic text-projectfg">
          {title}
        </h3>
      </Link>
    </AspectRatio>
  );
}
