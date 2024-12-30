import AppWalletProvider from "@/providers/wallet.provider";
import type { Metadata } from "next";
import Head from "next/head";
import { Suspense } from "react";
import "./globals.css";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  metadataBase: new URL("https://dashboard.cellprotocol.science/"),
  title: "THE FUTURE OF DECENTRALIZED SCIENCE",
  description: "Discover the next wave of research: blockchain powered and boundless",
  openGraph: {
    title: "THE FUTURE OF DECENTRALIZED SCIENCE",
    description: "Discover the next wave of research: blockchain powered and boundless",
    url: new URL("https://dashboard.cellprotocol.science/")
  }
};

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const ppneubit = localFont({
  src: "../../public/fonts/pepe/ppneuebit-bold-webfont.woff",
  weight: "600",
  variable: "--font-ppneubit"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>THE FUTURE OF DECENTRALIZED SCIENCE</title>
        <meta
          name="description"
          content="Discover the next wave of research: blockchain powered and boundless"
        />
        <meta property="og:image" content="./opengraph-image.png"></meta>
        <meta property="og:url" content="https://dashboard.cellprotocol.science"></meta>
        <meta property="og:title" content="THE FUTURE OF DECENTRALIZED SCIENCE"></meta>
        <meta property="og:site_name" content="https://dashboard.cellprotocol.science"></meta>
        <meta
          property="og:description"
          content="Discover the next wave of research: blockchain powered and boundless"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${satoshi.variable} ${ppneubit.variable}`}>
        <AppWalletProvider>
          <Suspense>
            {children}
          </Suspense>
        </AppWalletProvider>
      </body>
    </html>
  );
}
