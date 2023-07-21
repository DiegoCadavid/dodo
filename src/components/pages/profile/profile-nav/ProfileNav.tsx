import { useEffect, useState } from "react";
import Link from "next/link";
import tailwindConfig from "tailwind.config";
import ProfileNavUser from "./ProfileNavUser";

const BANNER_HEIGHT = parseInt(
  tailwindConfig.theme.extend.height.bannerProfile.replace("px", "")
);

const ProfileNav = ({}) => {
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollDown(window.scrollY > BANNER_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-14 z-10 bg-background-500 shadow`}>
      <div className="dodo-container dodo-grid items-center">
        <ProfileNavUser isScrollDown={isScrollDown} />
        
        {!isScrollDown && (
          <div className="col-span-6 flex">
            <Link
              href="#"
              className="inline-block flex-1 border-b-2 border-primary-500 py-3 text-center text-primary-500"
            >
              Post
            </Link>
            <Link href="#" className="inline-block flex-1 py-3 text-center ">
              Responses
            </Link>
            <Link href="#" className="inline-block flex-1 py-3 text-center ">
              Media
            </Link>
            <Link href="#" className="inline-block flex-1 py-3 text-center ">
              Bookmarks
            </Link>
          </div>
        )}

        <div
          className={`${
            isScrollDown ? "col-span-6" : "col-span-3"
          }   justify-self-end`}
        >
          <button className="dodo-btn dodo-btn-primary">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
