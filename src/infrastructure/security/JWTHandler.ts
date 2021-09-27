import jwt from 'jsonwebtoken';
import { BasicUserInfoDTO } from '../../domain/dto/BasicUserInfoDTO';

export class JWTHandler {

  private static readonly secret = process.env.APP_JWT_SECRET ? process.env.APP_JWT_SECRET : '';
  private static readonly expiresIn = Number(process.env.APP_JWT_EXPIRES_IN);

  public static create(authenticatedUser: BasicUserInfoDTO): string {
    return jwt.sign(Object.assign({}, authenticatedUser), JWTHandler.secret, {
      expiresIn: JWTHandler.expiresIn,
    });
  }

  public static decode(token: string): BasicUserInfoDTO {
    return jwt.verify(token, JWTHandler.secret) as BasicUserInfoDTO;
  }
}