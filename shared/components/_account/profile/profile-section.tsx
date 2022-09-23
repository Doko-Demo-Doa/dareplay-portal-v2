import React from "react";

import { Avatar, Divider, Group, Stack, Text, Title } from "@mantine/core";

const ProfileSection = () => {
  return (
    <Stack sx={{ flexGrow: 1 }} align="stretch" justify="space-between">
      <Title>Profile</Title>
      <Divider my="sm" />

      <Group>
        <Avatar size="xl" radius="xl" />
        <Stack spacing={0}>
          <Text>Account</Text>
          <Title order={3}>Username</Title>
        </Stack>
      </Group>
    </Stack>
  );
};

export default ProfileSection;
