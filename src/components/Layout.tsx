import Head from "next/head";

export type LayoutProps = {
  children: React.ReactNode;
  headerExpanded?: boolean;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Samuel Emde</title>
        <meta name="description" content="Samuel Emde Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative flex min-h-screen flex-col">{children}</div>
    </>
  );
}
