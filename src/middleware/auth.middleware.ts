import passport from "passport";
import { Request, Response, NextFunction } from "express";

export const authenticateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("jwt", { session: false })(req, res, next);
};
