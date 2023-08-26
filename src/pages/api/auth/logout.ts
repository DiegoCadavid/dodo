import { type NextApiRequest, type NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Set-Cookie", `Authorization=; HttpOnly; Path=/; Max-Age=${0}`);
  res.status(301).redirect("/auth/login");
};

export default handler;
