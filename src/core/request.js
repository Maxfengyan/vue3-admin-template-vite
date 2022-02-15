import axios from "axios";
class Axios {
  constructor(url, time) {
    this.url = url;
    this.time = time;
    this.axiosInstance = null;
    this.createService(url, time);
  }

  createService(url, time) {
    this.axiosInstance = axios.create({
      baseURL: url,
      withCredentials: true,
      timeout: time || 10000,
    });
    this.interceptorsRequestToken();
    this.interceptorsResponseToken();
  }

  interceptorsRequestToken() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        // 相应拦截预留处理 自定义错误码
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  interceptorsResponseToken() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        config.url = this.handleJsonSuffix(config.url);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
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
    if (!import.meta.env.DEV && url.indexOf(".json") !== -1) {
      return url.replace(".json", "");
    } else {
      return url;
    }
  }
}

export default Axios;
