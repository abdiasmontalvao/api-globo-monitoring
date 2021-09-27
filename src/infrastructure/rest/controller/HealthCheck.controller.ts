import { Request, Response } from 'express';

export class HealthCheckController {

  public async check(req: Request, res: Response): Promise<Response> {
    return res.status(200).json('server is running');
  }
}