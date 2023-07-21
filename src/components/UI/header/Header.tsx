import Link from "next/link";

const Header = ({}) => {
  return (
    <header className="sticky top-0 z-20 border-b border-background-400 bg-background-500 py-2">
      <div className="dodo-container  flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary-500">Dodo</h1>
        </Link>

        <div className="flex items-center gap-4">
          <form>
            <input
              type="text"
              placeholder="Search something..."
              className="h-10 w-56 rounded-full bg-background-300 px-4 text-sm text-white outline-none"
            />
          </form>
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dd4p0ksdu/image/upload/v1688957902/boadqmqfzmgruxo4ynij.png"
              alt="user image"
              className="h-10 w-10 rounded-lg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
