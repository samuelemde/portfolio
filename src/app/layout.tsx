import { type Metadata } from "next";
import { Providers } from "~/components/Providers";
import { Archivo_Black, Archivo_Narrow } from "next/font/google";
import "~/styles/globals.css";
import { type PropsWithChildren } from "react";

const archivoBlack = Archivo_Black({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const archivoNarrow = Archivo_Narrow({
  weight: "700",
  display: "swap",
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Emde",
  description: "Samuel Emde Portfolio Page",
  viewport: "width=device-width, initial-scale=1",
};
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivoBlack.variable} ${archivoNarrow.variable} light`}
      style={{ colorScheme: "light" }}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
