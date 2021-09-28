import { Request, Response } from 'express';
import { CreateUserDTO } from '../../../domain/dto/CreateUserDTO';
import { UpdateUserDTO } from '../../../domain/dto/UpdateUserDTO';
import { DecryptedPassword } from '../../../domain/vo/DecryptedPassword';
import { Email } from '../../../domain/vo/Email';
import { UserRole } from '../../../domain/vo/UserRole';
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

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password, role } = req.body;

      if (!email || !password || !role)  {
        throw new RestError('Missing body parameters', 400);
      }

      const userDTO = new CreateUserDTO(
        new Email(email),
        new DecryptedPassword(password),
        role as UserRole
      );

      const user = await this.userService.create(userDTO);
  
      return res.status(201).json(user);
    } catch(e: any) {
      if (e instanceof RestError) {
        res.status(e.code).json(e.message);
      } else {
        res.status(500).json(e.message);
      }
      throw e;
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {  
      const { id, email, password, role } = req.body;

      if (!id || !password || !role)  {
        throw new RestError('Missing body parameters', 400);
      }

      const userDTO = new UpdateUserDTO(
        id,
        new Email(email),
        new DecryptedPassword(password),
        role as UserRole
      );

      const user = await this.userService.save(userDTO);
  
      return res.status(200).json(user);
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