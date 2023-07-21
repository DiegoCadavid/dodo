const PostInput = ({}) => {
  return (
    <div className="dodo-box flex items-start gap-4 p-4">
      {/* Aside */}
      <div className="flex flex-shrink-0 flex-col items-end gap-2">
        <img
          src="https://res.cloudinary.com/dd4p0ksdu/image/upload/v1688957902/boadqmqfzmgruxo4ynij.png"
          alt="User profile"
          className="h-10 w-10 rounded-lg"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-primary-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>

      {/* Form */}
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <p className="font-semibold">DiegoDcm</p>
          <p className="text-sm text-white/50">@diegocadam55</p>
        </div>
        <form className="mt-1 flex flex-col items-end gap-2">
          <textarea
            placeholder="Write a post"
            className="min-h-[20px] w-full bg-transparent outline-none resize-none"
          ></textarea>
          <button type="submit" className="dodo-btn dodo-btn-primary ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostInput;
