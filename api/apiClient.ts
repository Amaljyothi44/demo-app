import ApiService from './apiService';
import { apiEndpoints } from './apiEndPoints';

class ApiClient {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  public async sampleAPi(): Promise<any[]> {
    return this.apiService.fetchData<any[]>(apiEndpoints.users);
  }

}

export default ApiClient;