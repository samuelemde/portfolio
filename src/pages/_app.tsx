import "~/styles/globals.css";
import Layout from "~/components/Layout";
import { ThemeProvider } from "next-themes";
import { ProjectCardsProvider } from "~/contexts/ProjectCardsContext";
import { type AppPropsType } from "next/dist/shared/lib/utils";
import { HeaderContextProvider } from "~/contexts/HeaderContext";

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "system", "magic"]}
    >
      <Layout>
        <HeaderContextProvider>
          <ProjectCardsProvider>
            <Component {...pageProps} />
          </ProjectCardsProvider>
        </HeaderContextProvider>
      </Layout>
    </ThemeProvider>
  );
}
