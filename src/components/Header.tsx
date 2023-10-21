import React, { useContext, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { cn, projectColors } from "~/lib/utils";
import { ProjectCardsContext } from "~/contexts/ProjectCardsContext";
import { HeaderContext } from "~/contexts/HeaderContext";
import { useIsMobile } from "~/lib/hooks/useIsMobile";
import { type GetServerSidePropsContext } from "next";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import { Button } from "~/components/ui/button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { IsSsrMobileContext } from "~/contexts/SsrMobileContext";

const ThemeSwitcher = dynamic(() => import("~/components/ThemeSwitcher"), {
  ssr: false,
});

export type HeaderProps = {
  initialTitle?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  titleColorClass?: string;
  isSsrMobile?: boolean;
};

export default function Header({
  initialTitle,
  onMouseEnter,
  onMouseLeave,
  titleColorClass,
}: HeaderProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const isSsrMobile = useContext(IsSsrMobileContext);
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
    if (router.pathname === "/" || router.pathname === "/projects") {
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
    if (router.pathname === "/") {
      void router.push("/projects");
    } else if (router.pathname === "/projects") {
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
            "hover:shadow-inverse max-w-[279px] cursor-none rounded-3xl py-1 pl-1 pr-3 font-heading text-3xl uppercase italic transition-none duration-700 ease-in-out hover:bg-inversebg hover:text-inversefg md:max-w-[352px] md:pl-4 md:pr-6 md:text-4xl",
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
              className="hover:shadow-inverse cursor-none rounded-full duration-0 hover:bg-inversebg hover:text-inversefg"
              variant="none"
              size="icon"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={handleEyeClick}
            >
              <EyeClosedIcon
                style={{ height: "1.8rem", width: "1.8rem" }}
                className={cn({ hidden: router.pathname !== "/" })}
              />
              <EyeOpenIcon
                style={{ height: "1.8rem", width: "1.8rem" }}
                className={cn({ hidden: router.pathname !== "/projects" })}
              />
            </Button>
          )}
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
      </div>
    </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return { props: { isSsrMobile: getIsSsrMobile(context) } };
}
