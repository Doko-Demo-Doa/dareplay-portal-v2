import React from "react";
import dynamic from "next/dynamic";

import {
  Avatar,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const UserInformationForm = dynamic(
  () => import("shared/components/_account/profile/user-information-form")
);
const UserWalletForm = dynamic(
  () => import("shared/components/_account/profile/user-wallet-form")
);

const ProfileSection = () => {
  return (
    <Stack sx={{ flexGrow: 1 }} align="stretch" justify="space-between">
      <Title>Profile</Title>
      <Divider mb="sm" variant="dotted" />

      <Group mb={16}>
        <Avatar size="xl" radius="xl" />
        <Stack spacing={0}>
          <Text>Account</Text>
          <Title order={3}>Username</Title>
        </Stack>
      </Group>

      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: "lg", cols: 2, spacing: "lg" },
          { maxWidth: "md", cols: 2, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <UserInformationForm />
        <UserWalletForm />
      </SimpleGrid>
    </Stack>
  );
};

export default ProfileSection;
