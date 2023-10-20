import "~/styles/globals.css";
import Layout from "~/components/Layout";
import { ThemeProvider } from "next-themes";
import { ProjectCardsProvider } from "~/contexts/ProjectCardsContext";
import { HeaderContextProvider } from "~/contexts/HeaderContext";
import { IsSsrMobileContext } from "~/contexts/SsrMobileContext";
import { type AppProps } from "next/app";

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ isSsrMobile: boolean }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "system", "neon"]}
    >
      <Layout>
        <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
          <HeaderContextProvider>
            <ProjectCardsProvider>
              <Component {...pageProps} />
            </ProjectCardsProvider>
          </HeaderContextProvider>
        </IsSsrMobileContext.Provider>
      </Layout>
    </ThemeProvider>
  );
}
