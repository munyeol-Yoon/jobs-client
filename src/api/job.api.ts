import { TJob } from "@/\btypes/job.type";
import { AxiosInstance } from "axios";

class JobAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getAllJob() {
    const path = "/job";
    const response = await this.axios.get<TJob[]>(path);
    const result = response.data;

    return result;
  }
}

export default JobAPI;
