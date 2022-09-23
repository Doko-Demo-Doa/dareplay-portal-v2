import { AppShell, Container, Header, Text } from "@mantine/core";
import Head from "next/head";
import { useNetwork } from "wagmi";
import dynamic from "next/dynamic";
import AppHeader from "~/shared/components/_common/app-header";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const MasterLayout: React.FC<Props> = ({ children, title, description }) => {
  const { chain } = useNetwork();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>

      <AppShell
        padding="md"
        header={
          <Header height={60}>
            <AppHeader />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Container size="md">{children}</Container>
      </AppShell>
    </>
  );
};

export default MasterLayout;
