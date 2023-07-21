import Link from "next/link";
import WhoFollowItem from "./WhoFollowItem";

const WhoFollow = ({}) => {
  return (
    <div className="dodo-box flex flex-col gap-4 p-4">
      {/* Header */}
      <h2 className="dodo-heading-primary">Who to follow</h2>

      {/* Content */}
      <WhoFollowItem />
      <WhoFollowItem />
      <WhoFollowItem />

      {/* Footer */}
      <Link href="/profiles" className="dodo-link">
        Show more
      </Link>
    </div>
  );
};

export default WhoFollow;
