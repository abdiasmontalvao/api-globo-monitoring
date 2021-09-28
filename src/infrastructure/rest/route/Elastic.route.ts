import { Router } from 'express';
import { ElasticController } from '../controller/Elastic.controller';
import { AuthMiddleware } from '../middleware/Auth.middleware';

export class ElasticRoute {

  public router = Router();
  private readonly elasticController = new ElasticController();

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
      .route('/cpu-usage')
      .get(
        (req, res) => this.elasticController.getCpuUsageData(req, res)
      );

    this
      .router
      .route('/memory-usage')
      .get(
        (req, res) => this.elasticController.getMemoryUsageData(req, res)
      );

    this
      .router
      .route('/cluster-status')
      .get(
        (req, res) => this.elasticController.getClusterStatusInfo(req, res)
      );
  }
}