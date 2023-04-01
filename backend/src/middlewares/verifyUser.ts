import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) return res.status(403).json({ error: "Forbidden" });

      if (!data) return res.status(403).json({ error: "Forbidden" });
      req.user = data.user;
      next();
    });
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
};

export default verifyUser;
