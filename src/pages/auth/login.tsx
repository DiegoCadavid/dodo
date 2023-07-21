import Layout from "@/components/UI/layouts/Layout";
import Link from "next/link";

const Login = ({}) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-primary-500">Dodo</h1>
          <p className="text-xl">Welcome back! 👋</p>

          <form className="mt-8 flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="dodo-input"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="dodo-input"
            />
            <button type="submit" className="dodo-btn dodo-btn-primary pt-2">
              Login
            </button>
          </form>

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
            You no have account?{" "}
            <Link href="/auth/register" className="text-primary-500">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="flex-1">
        {/* Image */}
        <img
          src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1689906694%2Ft6ci3loggyc3inozcyen.webp&w=1920&q=75"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
