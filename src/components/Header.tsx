import React, { useContext, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { cn, projectColors } from "~/lib/utils";
import { ProjectCardsContext } from "~/contexts/ProjectCardsContext";
import { HeaderContext } from "~/contexts/HeaderContext";

const ThemeSwitcher = dynamic(() => import("~/components/ThemeSwitcher"), {
  ssr: false,
});

export type HeaderProps = {
  initialTitle?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  titleColorClass?: string;
};

export default function Header({
  initialTitle,
  onMouseEnter,
  onMouseLeave,
  titleColorClass,
}: HeaderProps) {
  const router = useRouter();
  const { setIsOpen } = useContext(ProjectCardsContext);
  const { spacing, transition, title, setTitle, animate } =
    useContext(HeaderContext);

  const titleColor =
    titleColorClass && projectColors.includes(titleColorClass)
      ? titleColorClass
      : "text-foreground";

  useEffect(() => {
    if (initialTitle) setTitle(initialTitle);
  }, []);

  const handleTitleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (router.pathname === "/projects") {
      setIsOpen(false);
      setTimeout(
        () =>
          void router.push({ pathname: "/", query: { startAnimation: false } }),
        700,
      );
    } else if (router.pathname === "/") {
      void router.push("/projects");
    } else {
      setIsOpen(false);
      animate();
      setTimeout(() => router.back(), 700);
    }
  };

  return (
    <>
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-8 py-6">
        <Link
          href={"#"}
          className={cn(
            "hover:shadow-inverse cursor-none rounded-3xl py-1 pl-4 pr-6 font-heading text-4xl uppercase italic duration-700 hover:bg-inversebg hover:text-inversefg",
            titleColor,
          )}
          style={{ transition, letterSpacing: spacing }}
          onClick={handleTitleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {title}
        </Link>

        <ThemeSwitcher
          size="1.8rem"
          className={cn(
            "hover:shadow-inverse cursor-none rounded-full duration-0 hover:bg-inversebg hover:text-inversefg",
            titleColor,
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </>
  );
}
