import Link from "next/link";

const WhoFollowItem = ({}) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-grow gap-2">
        <img
          src="https://res.cloudinary.com/dd4p0ksdu/image/upload/v1688957902/boadqmqfzmgruxo4ynij.png"
          alt="profile"
          className="h-10 w-10 rounded-lg"
        />
        <div className="flex flex-col">
          <Link href="/profile/test" className="font-medium hover:underline">
          DiegoDcm

          </Link>
          <p className="text-sm text-white/50">@username</p>
        </div>
      </div>
      <div className="flex-shrink-0">
        <button className="dodo-btn dodo-btn-secondary">Follow</button>
      </div>
    </div>
  );
};

export default WhoFollowItem;
