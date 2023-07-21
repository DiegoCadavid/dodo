import Layout from "@/components/UI/layouts/Layout";
import ProfileInfo from "@/components/pages/profile/profile-info/ProfileInfo";
import ProfileNav from "@/components/pages/profile/profile-nav/ProfileNav";
import Posts from "@/components/pages/shared/posts/Posts";
import TrendingCollapsed from "@/components/pages/shared/trending/TrendingCollapsed";
import UserProfile from "@/components/pages/shared/user/UserProfile";
import WhoFollow from "@/components/pages/shared/who-follow/WhoFollow";
import Link from "next/link";

const UserPage = ({}) => {
  return (
    <Layout>
      {/* BANNER */}
      <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1689033454%2Flps2gbevczpgyxq4vbob.jpg&w=1920&q=75"
        alt="user banner"
        className="h-bannerProfile w-full object-cover"
      />

      {/* USER MENU */}
      <ProfileNav />

      {/* BODY  */}
      <div className="dodo-container dodo-grid mt-6">
        {/* INFO PROFILE */}
        <ProfileInfo />

        {/* CONTENT POST */}
        <div className="col-span-6">
          <Posts />
        </div>

        {/* OTHER DATA */}
        <div className="col-span-3">
          <div className=" sticky top-30 flex flex-col gap-4">
            <WhoFollow />
            <TrendingCollapsed />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserPage;
