"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "~/lib/utils";
import { ProjectCardsContext } from "~/contexts/ProjectCardsContext";
import { HeaderContext } from "~/contexts/HeaderContext";
import { Button } from "~/components/ui/button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import { projectColors } from "~/lib/projectColors";

export type HeaderProps = {
  initialTitle?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  titleColorClass?: string | null;
  isSsrMobile: boolean;
};

export default function Header({
  initialTitle,
  onMouseEnter,
  onMouseLeave,
  titleColorClass,
  isSsrMobile,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  // const isSsrMobile = useContext(IsSsrMobileContext);
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
    if (pathname === "/" || pathname === "/projects") {
      setIsOpen(false);
      animate();
      setTimeout(() => void router.push("/about"), 700);
    } else {
      setIsOpen(false);
      animate();
      setTimeout(() => router.back(), 700);
    }
  };

  const handleEyeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      void router.push("/projects");
    } else if (pathname === "/projects") {
      setIsOpen(false);
      setTimeout(() => void router.push("/"), 700);
    }
  };

  return (
    <>
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-4 py-3 sm:px-8 sm:py-6">
        <Link
          href={"#"}
          className={cn(
            "max-w-[279px] cursor-none rounded-3xl py-1 pl-1 pr-3 font-heading text-3xl uppercase italic transition-none duration-700 ease-in-out hover:bg-inversebg hover:text-inversefg hover:shadow-inverse md:max-w-[352px] md:pl-4 md:pr-6 md:text-4xl",
            titleColor,
            spacing,
            transition,
          )}
          onClick={handleTitleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {title}
        </Link>
        <div className="flex flex-row gap-2">
          {!isSsrMobile && (
            <Button
              className="cursor-none rounded-full duration-0 hover:bg-inversebg hover:text-inversefg hover:shadow-inverse"
              variant="none"
              size="icon"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={handleEyeClick}
            >
              <EyeClosedIcon
                style={{ height: "1.8rem", width: "1.8rem" }}
                className={cn({ hidden: pathname !== "/" })}
              />
              <EyeOpenIcon
                style={{ height: "1.8rem", width: "1.8rem" }}
                className={cn({ hidden: pathname !== "/projects" })}
              />
            </Button>
          )}
          <ThemeSwitcher
            className={cn(
              "cursor-none rounded-full duration-0 hover:bg-inversebg hover:text-inversefg hover:shadow-inverse",
              titleColor,
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
    </>
  );
}

// export function getServerSideProps(context: GetServerSidePropsContext) {
//   return { props: { isSsrMobile: getIsSsrMobile(context) } };
// }
