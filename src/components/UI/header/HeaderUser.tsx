import Link from "next/link";
import { useState } from "react";

const HeaderUser = ({}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <img
        src="https://res.cloudinary.com/dd4p0ksdu/image/upload/v1688957902/boadqmqfzmgruxo4ynij.png"
        alt="user image"
        className="h-10 w-10 rounded-lg hover:ring hover:ring-primary-700"
        onClick={() => setShow(!show)}
      />

      { show && <div className="absolute right-0 top-12 rounded-lg border border-background-300 bg-background-400 shadow overflow-hidden" onMouseLeave={() => setShow(false)}>
        <Link href="/profile/user" className="flex items-center gap-2 px-4 py-2 hover:bg-background-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          Profile
        </Link>
        <Link href="/auth/logout" className="flex items-center gap-2 px-4 py-2 hover:bg-background-300 hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
          Logout
        </Link>
        
      </div>}
    </div>
  );
};

export default HeaderUser;
