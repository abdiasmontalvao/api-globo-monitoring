import axios from "axios";

export class ElasticServiceClient {

  private readonly client = axios.create({
    baseURL: 'https://run.mocky.io/v3'
  });

  public async getCpuUsageData(): Promise<object> {
    const { data } = await this.client.get('/b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f');
    return data;
  }

  public async getMemoryUsageData(): Promise<object> {
    const { data } = await this.client.get('/d23c3262-967e-4567-b7f6-2fd263748811');
    return data;
  }

  public async getClusterStatusInfo(): Promise<object> {
    const { data } = await this.client.get('/cab2791c-7c85-4461-b95c-86bc1a12dc72');
    return data;
  }
}