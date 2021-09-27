import { Router } from 'express';
import { AuthController } from '../controller/Auth.controller';

export class AuthRoute {

  public router = Router();
  private readonly authController = new AuthController();

  constructor() {
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.route('/login').post(
      (req, res) => this.authController.login(req, res)
    );
  }
}