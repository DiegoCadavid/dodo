import { prisma } from "@/server/db";
import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { env } from "@/env.mjs";
import exclude from "@/utils/exclude";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      return res.status(400).json({
        msg: "Only POST requests are allowed",
      });
    }

    // Validate data
    const dataSchema = z.object({
      email: z.string().trim().email(),
      password: z.string().trim().min(8).max(20),
    });

    const body = dataSchema.safeParse(req.body);

    if (body.success === false) {
      const formatted = body.error.format();
      return res.status(400).json({ msg: formatted._errors.join(", ") });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.data.email,
      },
    });

    if (!user) {
      return res.status(400).json({ msg: "There is no user with that email" });
    }

    const isValidPassword = await bcrypt.compare(
      body.data.password,
      user.password
    );

    if (!isValidPassword) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 3,
    });

    // Set cookie
    res.setHeader(
      "Set-Cookie",
      `Authorization=Bearer ${token}; HttpOnly; Path=/; Max-Age=${
        60 * 60 * 24 * 3
      }`
    );

    res.status(200).json({ user: exclude(user, ["password"]) });
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return res.status(500).json({ msg: "SERVER ERROR" });
  }
};

export default handler;
