import Express from 'express';
import cors from 'cors';
import { AuthRoute } from './route/Auth.route';
import { HealthCheckRoute } from './route/HealthCheck.route';
import { UserRoute } from './route/User.route';
import { ElasticRoute } from './route/Elastic.route';

export class App {

  private readonly application = Express();

  constructor(private readonly port: number) {
    this.setCors();
    this.setMiddlewares();
    this.setRoutes();
  }

  private setCors(): void {
    const options = {
      origin: 'http://localhost:8080',
      optionsSuccessStatus: 200
    };
    this.application.use(cors(options));
  }

  private setMiddlewares(): void {
    this.application.use(Express.json());
  }

  private setRoutes(): void {
    const authRoute = new AuthRoute();
    const userRoute = new UserRoute();
    const healthCheckRoute = new HealthCheckRoute();
    const elasticRoute = new ElasticRoute();

    this.application.use('/auth', authRoute.router);
    this.application.use('/user', userRoute.router);
    this.application.use('/health-check', healthCheckRoute.router);
    this.application.use('/elastic', elasticRoute.router);
  }

  public start(): void {
    this.application.listen(this.port, () => {
      console.info(`App listening on port: ${this.port}`);
    });
  }
}