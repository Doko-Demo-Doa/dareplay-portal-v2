import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NextComponentType } from "next";

const DareplayApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "Poppins, sans-serif",
          fontFamilyMonospace: "Monaco, Courier, monospace",
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
};

export default DareplayApp;
