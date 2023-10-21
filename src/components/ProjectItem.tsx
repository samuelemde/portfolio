import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import { ProjectCardsContext } from "~/contexts/ProjectCardsContext";
import { cn } from "~/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useRouter } from "next/router";
import { HeaderContext } from "~/contexts/HeaderContext";
import { useVisibilityCheck } from "~/lib/hooks/useVisibilityCheck";
import { useIsMobile } from "~/lib/hooks/useIsMobile";

export type ProjectItemProps = {
  src: string;
  title: string;
  href: string;
  isSsrMobile?: boolean;
};

export default function ProjectItem({
  src,
  title,
  href,
  isSsrMobile,
}: ProjectItemProps) {
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
      className={cn(
        "group relative m-auto h-0 w-full  overflow-hidden rounded-full pb-[100%] transition-all duration-700",
        { "w-0 min-w-0 pb-0": !isOpen },
      )}
    >
      <Image
        src={src}
        alt={title}
        fill
        className="rounded-full object-cover p-px"
        sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
      />
      <Link
        href="#"
        className={cn(
          "absolute inset-px flex cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-0 opacity-0 transition group-hover:bg-opacity-25 group-hover:opacity-100",
          {
            "bg-opacity-25 opacity-100": isVisible && isSsrMobile,
          },
        )}
        onClick={(event) => handleClick(event, href)}
      >
        <h3
          dangerouslySetInnerHTML={{ __html: title }}
          className="whitespace-pre-line text-center font-heading text-3xl font-bold uppercase italic text-projectfg"
        />
      </Link>
    </AspectRatio>
  );
}
