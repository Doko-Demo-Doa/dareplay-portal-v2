import {
  Anchor,
  Breadcrumbs,
  Group,
  NavLink,
  Paper,
  Stack,
} from "@mantine/core";
import dynamic from "next/dynamic";
import { IconChevronRight } from "@tabler/icons";
import MasterLayout from "~/layouts/master-layout";

const ProfileSection = dynamic(
  () => import("shared/components/_account/profile/profile-section")
);

const items = [
  { title: "Home", href: "/" },
  { title: "My account", href: "/" },
  { title: "Thomasle's profile", href: "/" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const Profile = () => {
  return (
    <>
      <Stack>
        <Breadcrumbs my={8} separator={<IconChevronRight />}>
          {items}
        </Breadcrumbs>

        <Group align="flex-start">
          <Paper pt={10} pb={120} sx={{ width: 200 }}>
            <NavLink px={40} py={16} label="Profile" />
            <NavLink px={40} py={16} label="Assets" />
            <NavLink px={40} py={16} label="Activities" />
            <NavLink px={40} py={16} label="Verification" />
          </Paper>

          <ProfileSection />
        </Group>
      </Stack>
    </>
  );
};

Profile.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MasterLayout
      title="Account Management"
      description="DarePlay account management"
    >
      {page}
    </MasterLayout>
  );
};

export default Profile;
