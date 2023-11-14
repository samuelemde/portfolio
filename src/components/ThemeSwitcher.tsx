"use client";

import * as React from "react";
import { useContext } from "react";
import { LightningBoltIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { AppContext } from "~/contexts/AppContext";

export type ThemeSwitcherProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };

export default function ThemeSwitcher({
  onMouseEnter,
  onMouseLeave,
  ...props
}: ThemeSwitcherProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { isFirstLoad } = useContext(AppContext);
  const [mounted, setMounted] = React.useState(!isFirstLoad);

  // Ensure component is mounted before accessing the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const Icon =
    resolvedTheme === "light"
      ? SunIcon
      : resolvedTheme === "dark"
      ? MoonIcon
      : LightningBoltIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          {...props}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          variant="none"
          size="icon"
        >
          <Icon className="h-[1.8rem] w-[1.8rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="cursor-none"
        align="end"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onMouseLeave}
      >
        <DropdownMenuItem
          className="min-w-[150px] cursor-none font-heading text-lg uppercase italic tracking-widest focus:bg-inversebg focus:text-inversefg"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="min-w-[150px] cursor-none font-heading text-lg uppercase italic tracking-widest focus:bg-inversebg focus:text-inversefg"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="min-w-[150px] cursor-none font-heading text-lg uppercase italic tracking-widest focus:bg-inversebg focus:text-inversefg"
          onClick={() => setTheme("neon")}
        >
          Neon
        </DropdownMenuItem>
        <DropdownMenuItem
          className="min-w-[150px] cursor-none font-heading text-lg uppercase italic tracking-widest focus:bg-inversebg focus:text-inversefg"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
