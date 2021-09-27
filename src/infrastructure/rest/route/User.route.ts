import { Router } from 'express';
import { UserRole } from '../../../domain/vo/UserRole';
import { UserController } from '../controller/User.controller';
import { ACLMiddleware } from '../middleware/ACL.middleware';
import { AuthMiddleware } from '../middleware/Auth.middleware';

export class UserRoute {

  public router = Router();
  private readonly userController = new UserController();

  constructor() {
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.router.use(AuthMiddleware.execute);
  }

  private setRoutes(): void {
    this
      .router
      .route('/')
      .get(
        (req, res, next) => ACLMiddleware.execute(UserRole.employee, req, res, next),
        (req, res) => this.userController.getAll(req, res)
      );
  }
}