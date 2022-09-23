import {
  Button,
  Container,
  Group,
  Image,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import { IconHome2 } from "@tabler/icons";
import React from "react";

const menu = [
  {
    label: "Home",
    icon: <IconHome2 />,
  },
];

const AppHeader = () => {
  return (
    <Container size="xl" sx={{ height: "100%" }}>
      <Group sx={{ height: "100%" }}>
        <Group mr={40}>
          <Image
            src="/logos/dareplay-logo-revamped.svg"
            alt="logo"
            width={70}
          />
          <Title>DarePlay</Title>
        </Group>

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
    </Container>
  );
};

export default AppHeader;
