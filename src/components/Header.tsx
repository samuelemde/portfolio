"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "~/lib/utils";
import { HeaderContext } from "~/contexts/HeaderContext";
import { Button } from "~/components/ui/button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import { colorOptions } from "~/lib/data/colorOptions";
import { AppContext } from "~/contexts/AppContext";

export type HeaderProps = {
  initialTitle?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isSsrMobile: boolean;
};

export default function Header({
  initialTitle,
  onMouseEnter,
  onMouseLeave,
  isSsrMobile,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setProjectsVisible, setFullBleedExpanded } = useContext(AppContext);
  const {
    spacing,
    transition,
    title,
    headerColor,
    setTitle,
    isEyeVisible,
    animateTitle,
  } = useContext(HeaderContext);

  const isEyeOpen = searchParams.get("eyeOpen") === "true";
  const queryColor = searchParams.get("titleColor");

  const titleColor = colorOptions[queryColor ?? headerColor ?? "header"];

  useEffect(() => {
    if (initialTitle) setTitle(initialTitle);
  }, []);

  const handleTitleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/" || pathname === "/projects") {
      setProjectsVisible(false);
      animateTitle();
      setTimeout(() => router.push("/about"), 300);
    } else {
      setFullBleedExpanded(false);
      animateTitle();
      setTimeout(() => router.back(), 300);
    }
  };

  const handleEyeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/?eyeOpen=${!isEyeOpen}`);
  };

  const showEye =
    !isSsrMobile && isEyeVisible && ["/", "/projects"].includes(pathname);
  const EyeIcon = isEyeOpen ? EyeOpenIcon : EyeClosedIcon;

  return (
    <>
      <div className="absolute left-0 right-0 top-0 z-30 flex h-[50px] items-center justify-between px-4 py-3 sm:h-[100px] sm:px-8 sm:py-6">
        <Link
          href={"#"}
          className={cn(
            "max-w-[279px] cursor-none rounded-3xl py-1 pl-1 pr-3 font-heading text-3xl uppercase italic transition-none duration-300 ease-in-out hover:bg-inversebg hover:text-inversefg hover:shadow-inverse md:max-w-[352px] md:pl-4 md:pr-6 md:text-4xl",
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
          {showEye && (
            <Button
              className={cn(
                "cursor-none rounded-full duration-0 hover:bg-inversebg hover:text-inversefg hover:shadow-inverse",
                titleColor,
              )}
              variant="none"
              size="icon"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={handleEyeClick}
            >
              <EyeIcon style={{ height: "1.8rem", width: "1.8rem" }} />
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
