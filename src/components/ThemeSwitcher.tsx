"use client";

import * as React from "react";
import { LightningBoltIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

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

  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted before accessing the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
          {resolvedTheme === "light" && (
            <SunIcon className="h-[1.8rem] w-[1.8rem]" />
          )}
          {resolvedTheme === "dark" && (
            <MoonIcon className="h-[1.8rem] w-[1.8rem]" />
          )}
          {resolvedTheme === "neon" && (
            <LightningBoltIcon className="h-[1.8rem] w-[1.8rem]" />
          )}
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
