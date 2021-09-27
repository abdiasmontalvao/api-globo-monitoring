import { Request, Response } from 'express';
import { RestError } from '../error/RestError';
import { UserService } from '../service/User.service';

export class UserController {

  private readonly userService = new UserService();

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {  
      const users = await this.userService.getAll();
  
      return res.status(200).json(users);
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