"use client";

import { AppShell } from "@mantine/core";
import { Poppins } from "@next/font/google";

import BlockchainProvider from "~/dapp/blockchain-provider";
import AppHeader from "~/shared/components/_common/app-header";

interface Props {
  children: React.ReactNode;
}

const poppins = Poppins({ weight: "400", variable: "--poppins-font" });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <BlockchainProvider>
          <AppShell
            padding={0}
            header={<AppHeader />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.pink[8]
                    : theme.colors.gray[0],
                // Use this to remove the reserved area for header, by Appshell
                paddingTop: "unset",
              },
            })}
            sx={{}}
          >
            {children}
          </AppShell>
        </BlockchainProvider>
      </body>
    </html>
  );
}
