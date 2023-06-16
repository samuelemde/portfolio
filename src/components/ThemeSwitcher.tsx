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
import { cn } from "~/lib/utils";

export type ThemeSwitcherProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };

export default function ThemeSwitcher({
  size = "1.2rem",
  onMouseEnter,
  onMouseLeave,
  ...props
}: ThemeSwitcherProps) {
  const { resolvedTheme, setTheme } = useTheme();

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
          <SunIcon
            style={{ height: size, width: size }}
            className={cn(
              resolvedTheme === "light"
                ? "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                : "absolute rotate-90 scale-0",
            )}
          />
          <MoonIcon
            style={{ height: size, width: size }}
            className={cn(
              resolvedTheme === "dark"
                ? "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                : "absolute rotate-90 scale-0",
            )}
          />
          <LightningBoltIcon
            style={{ height: size, width: size }}
            className={cn(
              "absolute transition-all",
              resolvedTheme === "magic"
                ? "rotate-0 scale-100"
                : "rotate-90 scale-0",
            )}
          />
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
          onClick={() => setTheme("magic")}
        >
          Rainbow
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
