import "~/styles/globals.css";
import Layout from "~/components/Layout";
import { ThemeProvider } from "next-themes";
import { ProjectCardsProvider } from "~/contexts/ProjectCardsContext";
import { HeaderContextProvider } from "~/contexts/HeaderContext";
import { IsSsrMobileContext } from "~/contexts/SsrMobileContext";
import { type AppProps } from "next/app";
import { StartAnimationProvider } from "~/contexts/StartAnimationContext";

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ isSsrMobile: boolean }>) {
  return (
    <Layout>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={["light", "dark", "system", "neon"]}
      >
        <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
          <StartAnimationProvider>
            <HeaderContextProvider>
              <ProjectCardsProvider>
                <Component {...pageProps} />
              </ProjectCardsProvider>
            </HeaderContextProvider>
          </StartAnimationProvider>
        </IsSsrMobileContext.Provider>
      </ThemeProvider>
    </Layout>
  );
}
