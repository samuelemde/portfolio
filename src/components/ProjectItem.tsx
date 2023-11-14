import Image from "next/image";
import Link from "next/link";
import React, {
  type PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { cn } from "~/lib/utils";
import useVisibilityCheck from "~/hooks/useVisibilityCheck";
import { type Project } from "~/lib/types";
import { colorOptions } from "~/lib/data/colorOptions";
import { HeaderContext } from "~/contexts/HeaderContext";

export type ProjectItemProps = PropsWithChildren & {
  project: Project;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: (e: React.MouseEvent<Element, MouseEvent>, href: string) => void;
  isSsrMobile: boolean;
};

export default function ProjectItem({
  project,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isSsrMobile,
}: ProjectItemProps) {
  const [selected, setSelected] = useState(false);

  const itemRef = useRef(null);
  const isVisible = useVisibilityCheck(itemRef);

  const { headerColor } = useContext(HeaderContext);
  const titleColor = colorOptions[headerColor ?? "project"];

  function handleClick(e: React.MouseEvent) {
    setSelected(true);
    onClick(e, project.href);
  }

  return (
    <div
      ref={itemRef}
      className={cn(
        "group relative w-full rounded-full pb-[100%] transition-all duration-300",
        { "scale-0": selected },
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={project.image.previewImage}
        alt={project.image.alt}
        fill
        className="h-auto w-full rounded-full p-px"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={project.image.priority ?? true}
      />
      <Link
        href={project.href}
        className={cn(
          "absolute inset-px flex cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-0 opacity-0 transition group-hover:bg-opacity-25 group-hover:opacity-100",
          {
            "bg-opacity-25 opacity-100": isVisible && isSsrMobile,
          },
        )}
        onClick={(e) => handleClick(e)}
      >
        <h3
          dangerouslySetInnerHTML={{ __html: project.title }}
          className={cn(
            "whitespace-pre-line text-center font-heading text-3xl font-bold uppercase italic",
            titleColor,
          )}
        />
      </Link>
    </div>
  );
}
