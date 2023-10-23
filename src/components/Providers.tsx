"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ProjectCardsProvider } from "~/contexts/ProjectCardsContext";
import { HeaderContextProvider } from "~/contexts/HeaderContext";
import { StartAnimationProvider } from "~/contexts/StartAnimationContext";
import { type PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "system", "neon"]}
    >
      <StartAnimationProvider>
        <HeaderContextProvider>
          <ProjectCardsProvider>{children}</ProjectCardsProvider>
        </HeaderContextProvider>
      </StartAnimationProvider>
    </NextThemesProvider>
  );
}
