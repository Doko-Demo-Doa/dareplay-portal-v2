import MasterLayout from "~/layouts/master-layout";

const Home = () => {
  return <>Index page</>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout>{page}</MasterLayout>;
};

export default Home;
