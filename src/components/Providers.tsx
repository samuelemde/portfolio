"use client";

import * as React from "react";
import { type PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeaderContextProvider } from "~/contexts/HeaderContext";
import { AppContextProvider } from "~/contexts/AppContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "system", "neon"]}
    >
      <AppContextProvider>
        <HeaderContextProvider>{children}</HeaderContextProvider>
      </AppContextProvider>
    </NextThemesProvider>
  );
}
