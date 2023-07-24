import Link from "next/link";
import HeaderUser from "./HeaderUser";

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
              className="h-10 w-56 rounded-full bg-background-400 px-4 text-sm text-white outline-none"
            />
          </form>

          <HeaderUser />  
        </div>
      </div>
    </header>
  );
};

export default Header;
