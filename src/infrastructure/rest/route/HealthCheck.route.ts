import { Router } from 'express';
import { HealthCheckController } from '../controller/HealthCheck.controller';

export class HealthCheckRoute {

  public router = Router();
  private readonly userController = new HealthCheckController();

  constructor() {
    this.setRoutes();
  }

  private setRoutes(): void {
    this
      .router
      .route('/')
      .get(
        (req, res) => this.userController.check(req, res)
      );
  }
}