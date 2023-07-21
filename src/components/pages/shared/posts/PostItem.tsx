import PostAction from "./PostAction";

const PostItem = ({}) => {
  return (
    <div className="dodo-box p-4 pb-2 flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <img
          src="https://res.cloudinary.com/dd4p0ksdu/image/upload/v1688957902/boadqmqfzmgruxo4ynij.png"
          alt="user icon"
          className="h-10 w-10 shrink-0 rounded-lg"
        />

        {/* User info */}
        <div className="">
          <p className="font-semibold">DiegoDcm</p>

          <div className="flex items-center gap-2  text-sm leading-none text-white/50">
            <p>@diegocadam55</p>
            <span className="h-1 w-1 rounded-full bg-white/50 "></span>
            <p>1h</p>
          </div>
        </div>
      </div>

      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quae
        assumenda incidunt, optio et soluta dolore, voluptatibus expedita
        distinctio odit eaque.
      </p>

      <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1689908314%2Fpzzrruma3jeq1knl6ken.jpg&w=1920&q=75"
        alt="post image"
        className="mt-2 rounded-lg"
      />

      
      <div className="flex gap-2">
        <PostAction />
        <PostAction />
        <PostAction />
        <PostAction />

      </div>


    </div>
  );
};

export default PostItem;
