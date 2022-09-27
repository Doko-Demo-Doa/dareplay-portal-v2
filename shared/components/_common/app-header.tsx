import React from "react";
import {
  ActionIcon,
  AspectRatio,
  BackgroundImage,
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Menu,
  Paper,
  Title,
} from "@mantine/core";
import { IconHome2, IconBell, IconCurrencyBitcoin } from "@tabler/icons";
import { ConnectKitButton } from "connectkit";

const menu = [
  {
    label: "Home",
    icon: <IconHome2 />,
  },
];

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[7],
    height: 90,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: 60,
    },
  },
  logoTitle: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  nav: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  menu: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  menuMobile: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <Header className={classes.header} height={90}>
      <Container
        size="xl"
        sx={() => {
          return { height: "100%" };
        }}
      >
        <Group sx={{ height: "100%" }} position="apart">
          <Group mr={40}>
            <Group>
              <Image
                height={40}
                width={70}
                fit="contain"
                src="/logos/dareplay-logo-revamped.svg"
                alt="Logo"
              />
              <Title className={classes.logoTitle}>DarePlay</Title>
            </Group>

            <Group className={classes.nav}>
              {menu.map((n, idx) => (
                <Menu key={idx} shadow="md" width={200}>
                  <Menu.Target>
                    <Button leftIcon={n.icon} variant="subtle">
                      {n.label}
                    </Button>
                  </Menu.Target>
                </Menu>
              ))}
            </Group>
          </Group>

          <Group className={classes.menu}>
            <ActionIcon size="xl" variant="filled">
              <IconBell />
            </ActionIcon>

            <Button
              size="md"
              color="dark.6"
              variant="filled"
              leftIcon={<IconCurrencyBitcoin />}
            >
              BSC
            </Button>

            <ConnectKitButton />
          </Group>

          <Box className={classes.menuMobile}>
            <Menu shadow="md" width="100%">
              <Menu.Target>
                <Burger opened={false}>Toggle menu</Burger>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Navigation</Menu.Label>

                {menu.map((n, idx) => (
                  <Menu.Item key={idx} icon={n.icon}>
                    {n.label}
                  </Menu.Item>
                ))}

                <Menu.Divider />
                <Menu.Label>Authentication</Menu.Label>
                <Menu.Item icon={<IconCurrencyBitcoin />}>
                  <ConnectKitButton theme="retro" />
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Group>
      </Container>
    </Header>
  );
};

export default AppHeader;
