import jwt, { type JwtPayload } from "jsonwebtoken";

import { env } from "@/env.mjs";

const validateJWT = <T>(JWT: string | null): (T & JwtPayload) | null => {
  
  if (!JWT) {
    return null;
  }

  try {
    const decoded = jwt.verify(JWT, env.JWT_SECRET);
    return decoded as T & JwtPayload;
  } catch (error) {
    return null;
  }
};

export default validateJWT;
