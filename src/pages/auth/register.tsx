import RegisterForm from "@/components/pages/auth/register/RegisterForm";
import Link from "next/link";

const register = ({}) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Image */}
        <img
          src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1689924033%2Fvrbsymipcskztvmktbfy.webp&w=1920&q=75"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-primary-500">Dodo</h1>
          <p className="text-xl mb-8">Just one step! ✨</p>

          <RegisterForm />

          <div className="my-6 flex items-center gap-4">
            <div className="h-0.5 w-full flex-1 bg-background-400"></div>
            <p className="text-background-300">or</p>
            <div className="h-0.5 w-full flex-1 bg-background-400"></div>
          </div>

          <div className="flex  gap-4">
            <button className="dodo-btn w-full border border-background-400 py-2 text-zinc-400 hover:bg-background-400">
              Discord
            </button>
            <button className="dodo-btn w-full border border-background-400 py-2 text-zinc-400 hover:bg-background-400">
              Google
            </button>
          </div>

          <p className="mt-4  text-zinc-300">
            You have account?{" "}
            <Link href="/auth/login" className="text-primary-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default register;
