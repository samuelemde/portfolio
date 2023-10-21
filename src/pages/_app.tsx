import "~/styles/globals.css";
import Layout from "~/components/Layout";
import { ThemeProvider } from "next-themes";
import { ProjectCardsProvider } from "~/contexts/ProjectCardsContext";
import { HeaderContextProvider } from "~/contexts/HeaderContext";
import { IsSsrMobileContext } from "~/contexts/SsrMobileContext";
import { type AppProps } from "next/app";
import { StartAnimationProvider } from "~/contexts/StartAnimationContext";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({
  Component,
  pageProps: { isSsrMobile, showFooter = true, ...pageProps },
}: AppProps<{ isSsrMobile: boolean; showFooter: boolean }>) {
  return (
    <Layout showFooter={showFooter}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={["light", "dark", "system", "neon"]}
      >
        <IsSsrMobileContext.Provider value={isSsrMobile}>
          <StartAnimationProvider>
            <HeaderContextProvider>
              <ProjectCardsProvider>
                <Component {...pageProps} />
                <Analytics />
              </ProjectCardsProvider>
            </HeaderContextProvider>
          </StartAnimationProvider>
        </IsSsrMobileContext.Provider>
      </ThemeProvider>
    </Layout>
  );
}
