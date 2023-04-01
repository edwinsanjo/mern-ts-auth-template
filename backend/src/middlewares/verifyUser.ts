import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

// const authMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.header("x-auth-token");
//   if (token === null || undefined)
//     res.status(400).json({ error: "Token not found." });
//   try {
//     let verifyToken = jwt.verify("asdfasdv", process.env.JWT_SECRET);
//     console.log(verifyToken);
//   } catch (error) {}
// };

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("x-auth-token");

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return res.sendStatus(403);
      }

      if (!data) return res.status(403).json("Invalid Token.");
      req.user = data.user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
export default authMiddleware;
