"use client";
import React from "react";
import {
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Menu,
  TextInput,
  Title,
} from "@mantine/core";
import { IconCurrencyBitcoin, IconSearch } from "@tabler/icons";
import { ConnectKitButton } from "connectkit";

const menu = [
  {
    label: "For Sale",
  },
  {
    label: "For Rent",
  },
];

const useStyles = createStyles((theme) => ({
  header: {
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
    <Header className={classes.header} height={90} fixed>
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
                    <Button variant="subtle">{n.label}</Button>
                  </Menu.Target>
                </Menu>
              ))}
            </Group>
          </Group>

          <Group className={classes.menu}>
            <TextInput
              size="lg"
              variant="filled"
              w="24rem"
              placeholder="Search for games, collections or items"
              rightSection={<IconSearch size={14} />}
            />
            <ConnectKitButton.Custom>
              {({ show }) => {
                return (
                  <Button color="red.4" size="lg" onClick={show}>
                    Connect Wallet
                  </Button>
                );
              }}
            </ConnectKitButton.Custom>
          </Group>

          <Box className={classes.menuMobile}>
            <Menu shadow="md" width="100%">
              <Menu.Target>
                <Burger opened={false}>Toggle menu</Burger>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Navigation</Menu.Label>

                {menu.map((n, idx) => (
                  <Menu.Item key={idx}>{n.label}</Menu.Item>
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
