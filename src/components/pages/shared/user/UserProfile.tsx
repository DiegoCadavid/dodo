import Link from "next/link";

const UserProfile = ({}) => {
  return (
    <div className="dodo-box">
      {/* Bannner */}
      <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1688604784%2Fld8xrjcop3mp5akake06.jpg&w=1920&q=75"
        alt="banner"
        className="h-24 w-full object-cover"
      />

      {/* User info */}
      <div className="flex items-end gap-4 px-4 py-4">
        <Link href={"/profile/test"} className="relative block h-8 w-20 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dd4p0ksdu/image/upload/v1688957902/boadqmqfzmgruxo4ynij.png"
            alt="user profile"
            className="absolute inset-x-0 bottom-0 aspect-square w-full rounded-lg border-2 border-background-500"
          />
        </Link>

        <div className="">
          <Link
            className="dodo-heading-primary hover:underline"
            href="/profile/test"
          >
            DiegoDcm
          </Link>
          <p className="text-sm text-white/50">@diegocadam55</p>
        </div>
      </div>

      {/* Followers info */}
      <div className="flex px-4 pb-4">
        <p className="flex-1 text-center">
          <span className="font-semibold">8</span> Followers
        </p>
        <p className="flex-1 text-center">
          <span className="font-semibold">8</span> Followers
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
