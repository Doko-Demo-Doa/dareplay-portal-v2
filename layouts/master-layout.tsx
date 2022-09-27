import { AppShell, Container, Header } from "@mantine/core";
import Head from "next/head";

import AppHeader from "~/shared/components/_common/app-header";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const MasterLayout: React.FC<Props> = ({ children, title, description }) => {
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
          <Header
            height={90}
            sx={(theme) => ({ backgroundColor: theme.colors.dark[7] })}
          >
            <AppHeader />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.pink[8]
                : theme.colors.gray[0],
            backgroundImage:
              "radial-gradient(farthest-side at 50% 5%, #0c3c6a, #131c33, #131c33)",
          },
        })}
        sx={{}}
      >
        <Container sx={{}} size="xl">
          {children}
        </Container>
      </AppShell>
    </>
  );
};

export default MasterLayout;
