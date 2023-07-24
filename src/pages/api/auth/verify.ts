import { prisma } from "@/server/db";
import exclude from "@/utils/exclude";
import validateJWT from "@/utils/validateJWT";
import { type NextApiRequest, type NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cookie = req.cookies.Authorization;
    if (!cookie) return res.status(401).json({ msg: "Unauthorized" });

    const decoded = validateJWT<{ id: string }>(cookie.split(" ")[1] as string);

    if (decoded === null) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    return res
      .status(200)
      .json({ msg: "Authorized", user: exclude(user, ["password"]) });
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return res.status(500).json({ msg: "SERVER ERROR" });
  }
};

export default handler;
