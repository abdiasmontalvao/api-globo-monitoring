import { Request, Response, NextFunction } from 'express';
import { UserRole } from "../../../domain/vo/UserRole";

export abstract class ACLMiddleware {

  public static execute(
    reqRole: UserRole,
    req: Request,
    res: Response,
    next: NextFunction
  ): Partial<Response|void> {
    if (
      reqRole === UserRole.administrator &&
      reqRole.toString() !== res.locals.user.role
    ) {
      return res.status(403).end();
    }

    next();
  }
}