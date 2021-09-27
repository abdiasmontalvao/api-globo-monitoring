import { Request, Response, NextFunction, response } from 'express';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { JWTHandler } from '../../security/JWTHandler';
import { RestError } from '../error/RestError';

export abstract class AuthMiddleware {

  public static execute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Partial<Response|void> {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new RestError('Missing authentication token', 401);
      }

      res.locals.user = JWTHandler.decode(token);
      next();
    } catch(e: any) {
      if (e instanceof RestError) {
        res.status(e.code).json(e.message);
      } else if (e instanceof JsonWebTokenError || e instanceof TokenExpiredError) {
        res.status(401).json(e?.message);
      } else {
        res.status(500).json(e.message);
      }
      throw e;
    }
  }
}