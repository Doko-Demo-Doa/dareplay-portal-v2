import React from "react";
import {
  Button,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
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

const UserInformationForm: React.FC = () => {
  return (
    <Stack>
      <Group>
        <ThemeIcon size="lg" radius="lg" color="white" variant="default">
          <IconUser size={20} />
        </ThemeIcon>
        <Title order={5}>INFORMATION</Title>
      </Group>
      <Paper p={16}>
        <Stack>
          {items.map((n, idx) => (
            <React.Fragment key={idx}>
              <Group position="apart">
                <ThemeIcon
                  size="lg"
                  radius="lg"
                  variant="gradient"
                  gradient={n.gradient}
                >
                  {n.icon}
                </ThemeIcon>

                <Text size="sm" color="orange.9">
                  Update from verification
                </Text>
              </Group>

              <Divider variant="solid" sx={{ opacity: 0.2 }} />
            </React.Fragment>
          ))}

          <Stack>
            <Title order={3}>Bio</Title>
            <Textarea minRows={4} placeholder="Enter description" />

            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "orange.4", deg: 360 }}
              size="lg"
              sx={{ alignSelf: "end" }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default UserInformationForm;
