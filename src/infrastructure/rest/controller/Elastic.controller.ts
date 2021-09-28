import { Request, Response } from 'express';
import { RestError } from '../error/RestError';
import { ElasticService } from '../service/Elastic.service';

export class ElasticController {

  private readonly elasticService = new ElasticService();

  public async getCpuUsageData(req: Request, res: Response): Promise<Response> {
    try {  
      const metrics = await this.elasticService.getCpuUsageData();
  
      return res.status(200).json(metrics);
    } catch(e: any) {
      if (e instanceof RestError) {
        res.status(e.code).json(e.message);
      } else {
        res.status(500).json(e.message);
      }
      throw e;
    }
  }

  public async getMemoryUsageData(req: Request, res: Response): Promise<Response> {
    try {  
      const metrics = await this.elasticService.getMemoryUsageData();
  
      return res.status(200).json(metrics);
    } catch(e: any) {
      if (e instanceof RestError) {
        res.status(e.code).json(e.message);
      } else {
        res.status(500).json(e.message);
      }
      throw e;
    }
  }

  public async getClusterStatusInfo(req: Request, res: Response): Promise<Response> {
    try {  
      const metrics = await this.elasticService.getClusterStatusInfo();
  
      return res.status(200).json(metrics);
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