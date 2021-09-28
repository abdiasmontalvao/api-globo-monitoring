import { ElasticServiceClient } from "../config/ElasticServiceClient";

export class ElasticService {

  private readonly elasticServiceClient: ElasticServiceClient;

  constructor() {
    this.elasticServiceClient = new ElasticServiceClient();
  }

  public getCpuUsageData(): Promise<object> {
    return this.elasticServiceClient.getCpuUsageData();
  }

  public getMemoryUsageData(): Promise<object> {
    return this.elasticServiceClient.getMemoryUsageData();
  }

  public getClusterStatusInfo(): Promise<object> {
    return this.elasticServiceClient.getClusterStatusInfo();
  }
}