import {
  Anchor,
  Breadcrumbs,
  Grid,
  MediaQuery,
  NavLink,
  Paper,
  Select,
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

const subItems = [
  { label: "Profile", subpath: "/profile" },
  { label: "Assets", subpath: "/assets" },
  { label: "Activities", subpath: "/activities" },
  { label: "Verification", subpath: "/verification" },
];

const Profile = () => {
  return (
    <>
      <Stack>
        <Breadcrumbs my={8} separator={<IconChevronRight />}>
          {items}
        </Breadcrumbs>

        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Select
            placeholder="Pick one"
            data={subItems.map((n) => ({
              value: n.subpath,
              label: n.label,
            }))}
          />
        </MediaQuery>

        <Grid grow>
          <Grid.Col sm={9} md={1}>
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Paper pt={10} pb={120} sx={{ width: 200 }}>
                {subItems.map((n, idx) => (
                  <NavLink key={idx} px={40} py={16} label={n.label} />
                ))}
              </Paper>
            </MediaQuery>
          </Grid.Col>

          <Grid.Col sm={9} md={8}>
            <ProfileSection />
          </Grid.Col>
        </Grid>
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
