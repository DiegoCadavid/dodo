import Layout from "@/components/UI/layouts/Layout";
import UserProfile from "@/components/pages/shared/user/UserProfile";

const index = ({}) => {
  return (
    <Layout>
      <main className="dodo-container grid gap-4 grid-cols-4 mt-4">
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </main>
    </Layout>
  );
};

export default index;
