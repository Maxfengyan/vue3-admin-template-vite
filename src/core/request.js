/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2021-06-18
 * function: 封装axios类
 * * * * * * * * * * * * * * *
 */
import axios from "axios";

class Axios {
  constructor(url, requestTime) {
    this.url = url;
    this.axiosInstance = null;
    this.createService(url, requestTime);
  }

  createService(url, requestTime) {
    const timeout = requestTime || 10000;
    this.axiosInstance = axios.create({
      baseURL: url,
      withCredentials: true,
      timeout: timeout,
    });
    this.interceptorsRequestToken();
    this.interceptorsResponseToken();
  }

  interceptorsRequestToken() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        config.url = this.handleJsonSuffix(config.url);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  interceptorsResponseToken() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        // 相应拦截预留处理 自定义错误码
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  getUrl() {
    return this.url;
  }

  getInstance() {
    return this.axiosInstance;
  }

  // 处理.json后缀
  handleJsonSuffix(url) {
    // 不排除真的有请求.json的情况，偷懒嫌疑
    if (!import.meta.env.DEV && url.indexOf(".json") !== -1) {
      return url.replace(".json", "");
    } else {
      return url;
    }
  }
}

export default Axios;
