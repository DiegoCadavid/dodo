import Link from "next/link";
import TrendingContainer from "./TrendingContainer";

const Trending = ({}) => {
  return (
    <div className="dodo-box flex flex-col">
      <h2 className="dodo-heading-primary p-4">Trending</h2>

      <TrendingContainer />

      <Link href="/trending" className="dodo-link p-4">
        Show more
      </Link>
    </div>
  );
};

export default Trending;
