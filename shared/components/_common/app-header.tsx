import React from "react";
import {
  ActionIcon,
  Button,
  Container,
  Group,
  Image,
  Menu,
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

const AppHeader = () => {
  return (
    <Container
      size="xl"
      sx={(theme) => {
        return { height: "100%" };
      }}
    >
      <Group sx={{ height: "100%" }} position="apart">
        <Group mr={40}>
          <Image
            src="/logos/dareplay-logo-revamped.svg"
            alt="logo"
            width={70}
          />
          <Title>DarePlay</Title>

          <Group>
            {menu.map((n, idx) => (
              <Menu key={idx} shadow="md" width={200}>
                <Menu.Target>
                  <Button leftIcon={n.icon} variant="subtle">
                    Home
                  </Button>
                </Menu.Target>
              </Menu>
            ))}
          </Group>
        </Group>

        <Group>
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
      </Group>
    </Container>
  );
};

export default AppHeader;
