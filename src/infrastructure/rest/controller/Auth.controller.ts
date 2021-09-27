import { Request, Response } from 'express';
import { UserLoginDTO } from '../../../domain/dto/UserLoginDTO';
import { DecryptedPassword } from '../../../domain/vo/DecryptedPassword';
import { Email } from '../../../domain/vo/Email';
import { RestError } from '../error/RestError';
import { AuthService } from '../service/Auth.service';

export class AuthController {

  private readonly authService = new AuthService();

  public async login(req: Request, res: Response): Promise<Response | void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new RestError('Missing body parameters', 400);
      }

      const userCredentials = new UserLoginDTO(
        new Email(email),
        new DecryptedPassword(password)
      );

      const authenticatedUser = await this.authService.login(userCredentials);
  
      return res.status(200).json(authenticatedUser);
    } catch(e: any) {
      if (e instanceof RestError) {
        res.status(e.code).json(e.message);
      } else {
        res.status(500).json(e.message);
      }
      throw e;
    }
  }
}