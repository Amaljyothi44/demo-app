import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private baseUrl: string = 'https://your-api.com/';
  private accessToken: string | null = null;
  private axiosInstance: AxiosInstance = axios.create();

  public setAccessToken(token: string): void {
    this.accessToken = token;
  }

  public async fetchData<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(
        `${this.baseUrl}${endpoint}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
          ...options,
        }
      );
      return response.data;
    } catch (error) {
      // if (axios.isAxiosError(error) && error.response?.status === 401) {
      //   await this.refreshAccessToken();
      //   return this.fetchData<T>(endpoint, options);
      // }
      throw error;
    }
  }

  public async createData<T, U>(endpoint: string, data: T, options: AxiosRequestConfig = {}): Promise<U> {
    try {
      const response: AxiosResponse<U> = await this.axiosInstance.post<U>(
        `${this.baseUrl}${endpoint}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
          ...options,
        }
      );
      return response.data;
    } catch (error) {
      // if (axios.isAxiosError(error) && error.response?.status === 401) {
      //   await this.refreshAccessToken();
      //   return this.createData<T, U>(endpoint, data, options);
      // }
      throw error;
    }
  }

  public async updateData<T, U>(endpoint: string, data: T, options: AxiosRequestConfig = {}): Promise<U> {
    try {
      const response: AxiosResponse<U> = await this.axiosInstance.put<U>(
        `${this.baseUrl}${endpoint}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
          ...options,
        }
      );
      return response.data;
    } catch (error) {
      // if (axios.isAxiosError(error) && error.response?.status === 401) {
      //   await this.refreshAccessToken();
      //   return this.updateData<T, U>(endpoint, data, options);
      // }
      throw error;
    }
  }

  public async deleteData<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(
        `${this.baseUrl}${endpoint}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
          ...options,
        }
      );
      return response.data;
    } catch (error) {
      // if (axios.isAxiosError(error) && error.response?.status === 401) {
      //   await this.refreshAccessToken();
      //   return this.deleteData<T>(endpoint, options);
      // }
      throw error;
    }
  }

  // private async refreshAccessToken(): Promise<void> {
  //   const newAccessToken: string = await this.fetchNewAccessToken();
  //   this.setAccessToken(newAccessToken);
  // }

  // private async fetchNewAccessToken(): Promise<string> {
  //   // Replace with the logic to refresh the token, e.g., using a refresh token
  //   const response = await axios.post<{ accessToken: string }>(`${this.baseUrl}auth/refresh`, {
  //     // Replace with actual refresh token logic
  //     refreshToken: 'your-refresh-token',
  //   });
  //   return response.data.accessToken;
  // }
}

export default ApiService;
