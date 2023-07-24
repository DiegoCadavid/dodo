
import Posts from "@/components/pages/shared/posts/Posts";
import Trending from "@/components/pages/shared/trending/Trending";
import Layout from "@/components/UI/layouts/Layout";
import UserProfile from "@/components/pages/shared/user/UserProfile";
import WhoFollow from "@/components/pages/shared/who-follow/WhoFollow";


export default function Home() {

  return (
    <Layout>
      <main className="dodo-grid dodo-container mt-4">
        {/* First Column */}
        <div className="col-span-3 ">
          <div className="sticky top-18 flex flex-col gap-4">
            <UserProfile />
            <WhoFollow />
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-4">
          <Posts />
        </div>
        <div className=" col-span-3">
          <div className=" flex flex-col gap-4 sticky top-18">
            <button className="w-full rounded-lg border border-primary-500 hover:bg-primary-500 hover:text-white transition-colors ease-out py-3 text-center text-primary-500">
              Post
            </button>

            <Trending />
            <div>
              <p className="text-sm text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sequi ad, debitis voluptate alias illum.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
