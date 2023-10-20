import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body className="tracking-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}