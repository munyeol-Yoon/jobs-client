import axios, { AxiosInstance } from "axios";
import JobAPI from "./job.api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class API {
  private axios: AxiosInstance;

  job;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL });
    this.job = new JobAPI(this.axios);
  }
}

const api = new API();

export default api;
