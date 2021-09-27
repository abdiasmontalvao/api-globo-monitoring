import Express from 'express';
import { AuthRoute } from './route/Auth.route';
import { HealthCheckRoute } from './route/HealthCheck.route';
import { UserRoute } from './route/User.route';

export class App {

  private readonly application = Express();

  constructor(private readonly port: number) {
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.application.use(Express.json());
  }

  private setRoutes(): void {
    const authRoute = new AuthRoute();
    const userRoute = new UserRoute();
    const healthCheckRoute = new HealthCheckRoute();

    this.application.use('/auth', authRoute.router);
    this.application.use('/user', userRoute.router);
    this.application.use('/health-check', healthCheckRoute.router);
  }

  public start(): void {
    this.application.listen(this.port, () => {
      console.info(`App listening on port: ${this.port}`);
    });
  }
}