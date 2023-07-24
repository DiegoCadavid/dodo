import { type User } from "@/types";
import { type GetServerSidePropsContext } from "next";
import validateJWT from "./validateJWT";
import { prisma } from "@/server/db";
import exclude from "./exclude";

const getServerAuth = async (
  req: GetServerSidePropsContext["req"] 
): Promise<User | null> => {
  const cookie = req.cookies.Authorization;
  if (!cookie) return null;

  if (!cookie.split(" ")[1]) {
    return null;
  }

  const decoded = validateJWT<{ id: string }>(cookie.split(" ")[1] as string);

  if (!decoded) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) {
    return null;
  }

  return exclude(user, ["password"]) as User;
};

export default getServerAuth;
