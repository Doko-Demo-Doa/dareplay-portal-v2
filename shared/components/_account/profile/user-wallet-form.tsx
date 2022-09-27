import React from "react";
import {
  ActionIcon,
  Button,
  CopyButton,
  Divider,
  Group,
  Input,
  Paper,
  Space,
  Stack,
  Text,
  Textarea,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconWallet,
  IconCopy,
  IconUser,
  IconMail,
  IconBrandTwitter,
  IconBrandTelegram,
} from "@tabler/icons";

const items = [
  {
    icon: <IconUser size={20} />,
    isInput: true,
    gradient: { from: "indigo", to: "cyan" },
  },
  {
    icon: <IconMail size={20} />,
    gradient: { from: "orange", to: "red" },
  },
  {
    icon: <IconBrandTwitter size={20} />,
    gradient: { from: "blue.4", to: "blue.4" },
  },
  {
    icon: <IconBrandTelegram size={20} />,
    gradient: { from: "blue.2", to: "blue.2" },
  },
];

const UserWalletForm: React.FC = () => {
  return (
    <Stack align="stretch" className="bao">
      <Group>
        <ThemeIcon size="lg" radius="lg" color="white" variant="default">
          <IconWallet size={20} />
        </ThemeIcon>
        <Title order={5}>MY WALLET</Title>
      </Group>

      <Paper p={16} className="asdf" sx={{ flexGrow: 2 }}>
        <Stack>
          <Stack>
            <Input
              disabled
              size="md"
              variant="filled"
              rightSection={
                <ActionIcon variant="transparent">
                  <IconCopy size={16} />
                </ActionIcon>
              }
              placeholder="0x19107D3A6a18c95611e9Ef212060008a240AD411"
            />
          </Stack>
          <Space />
          <Stack align="flex-end">
            <Input
              size="md"
              disabled
              rightSection={<Text>DNFT</Text>}
              rightSectionWidth={60}
              placeholder="2.000"
              variant="filled"
              sx={{ width: "100%" }}
            />
            <Button sx={{ width: "10rem" }}>Buy DNFT</Button>
          </Stack>
          <Stack align="flex-end">
            <Input
              size="md"
              disabled
              rightSection={<Text>DP</Text>}
              rightSectionWidth={60}
              placeholder="2.000"
              variant="filled"
              sx={{ width: "100%" }}
            />
            <Button sx={{ width: "10rem" }}>Get DP</Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default UserWalletForm;
