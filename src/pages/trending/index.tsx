import Layout from "@/components/UI/layouts/Layout";
import UserProfile from "@/components/pages/shared/user/UserProfile";
import WhoFollow from "@/components/pages/shared/who-follow/WhoFollow";
import TrendingContainer from "@/components/pages/trending/TrendingContainer";

const index = ({}) => {
  return (
    <Layout>
      <main className="dodo-container dodo-grid mt-4">
        <div className="col-span-3">
          <UserProfile />
        </div>
        <TrendingContainer />
        <div className="col-span-3">
          <WhoFollow />
        </div>
      </main>
    </Layout>
  );
};

export default index;
