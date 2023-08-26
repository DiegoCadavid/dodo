import { z } from "zod";
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "@/server/db";
import * as bcrypt from "bcrypt";
import exclude from "@/utils/exclude";
import axios, { isAxiosError } from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      return res.status(400).json({
        msg: "Only POST requests are allowed",
      });
    }

    const dataSchema = z.object({
      username: z.string().trim().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/g),
      email: z.string().trim().email(),
      password: z.string().trim().min(8).max(20),
    });

    const body = dataSchema.safeParse(req.body);

    if (body.success === false) {
      return res.status(400).json({
        msg: "Invalid data",
      });
    }

    const { username, email, password } = body.data;

    const userExist = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email,
          },
          {
            username,
          },
        ],
      },
    });

    if (userExist) {
      if (userExist.email === email) {
        return res.status(400).json({
          msg: "Email already exists",
        });
      }

      if (userExist.username === username) {
        return res.status(400).json({
          msg: "Username already exists",
        });
      }
    }

    const passwordEncrypted = await bcrypt.hash(password, 10);

    const userData = await prisma.user.create({
      data: {
        email,
        username,
        name: username,
        password: passwordEncrypted,
      },
    });

    return res.status(200).json(exclude(userData, ["password"]));
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return res.status(500).json({ msg: "SERVER ERROR" });
  }
};

export default handler;
