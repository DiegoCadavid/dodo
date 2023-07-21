
interface Props {
  isScrollDown: boolean
}

const ProfileNavUser = ({isScrollDown}: Props) => {

  if(isScrollDown) {
    return <div className="col-span-6 flex gap-2 py-2">
       <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1688957902%2Fboadqmqfzmgruxo4ynij.png&w=1080&q=75"
        alt="user profile"
        className="w-10 h-10 rounded-lg"
      />

      <div className="flex flex-col justify-center">
        <h2 className="font-semibold leading-none">DiegoDcm</h2>
        <p className="text-[10px]  text-white/50">@diegocadam55</p>
      </div>
    </div>
  }

  return (
    <div className="relative col-span-3 h-4 w-36 self-end">
      <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1688957902%2Fboadqmqfzmgruxo4ynij.png&w=1080&q=75"
        alt="user profile"
        className="absolute inset-x-0 -bottom-4 aspect-square rounded-lg border-4 border-background-500"
      />
    </div>
  );
};

export default ProfileNavUser;
