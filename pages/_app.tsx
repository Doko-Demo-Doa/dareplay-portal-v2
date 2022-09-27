import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NextComponentType } from "next";
import NextProgress from "next-progress";
import BlockchainProvider from "~/dapp/blockchain-provider";

const DareplayApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <>
      <NextProgress delay={100} height="3px" options={{ showSpinner: false }} />

      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <BlockchainProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "dark",
            colors: {
              dark: [
                "#eaf1fe",
                "#c9d6e9",
                "#a6bbd7",
                "#839fc7",
                "#6184b7",
                "#486a9e",
                "#38537c",
                "#273b59",
                "#162336",
                "#030c16",
              ],
            },
            fontFamily: "Poppins, sans-serif",
            fontFamilyMonospace: "Monaco, Courier, monospace",
          }}
        >
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </BlockchainProvider>
    </>
  );
};

export default DareplayApp;
