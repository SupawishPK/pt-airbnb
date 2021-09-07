import axios, { AxiosRequestConfig, AxiosStatic, AxiosInstance } from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const axiosInstance: AxiosInstance = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
  timeout: 30000
})

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  async (error) => {
    if (error.response?.status === 401) {
      // handle case 401
    }
    // Do something with response error
    return Promise.reject(error)
  }
)

class HttpRequest {
  public axios: AxiosStatic
  constructor() {
    this.axios = axios
  }

  public setHeader(header: { [key: string]: string }) {
    axiosInstance.defaults.headers.common[header.key] = header.value
    axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  public get<T = unknown>(methodName: string, data: object, config?: AxiosRequestConfig) {
    if (config) {
      return axiosInstance.get<T>(methodName, { params: data, ...config })
    }
    return axiosInstance.get<T>(methodName, { params: data })
  }

  public post<T = unknown>(
    methodName: string,
    data?: object | FormData | unknown,
    config?: AxiosRequestConfig
  ) {
    return axiosInstance.post<T>(methodName, data, config)
  }

  public update<T = unknown>(methodName: string, data: object, config?: AxiosRequestConfig) {
    return axiosInstance.put<T>(methodName, data, config)
  }

  public delete<T = unknown>(methodName: string, id: string) {
    return axiosInstance.delete<T>(methodName, { params: { id: id } })
  }

  public request<T = unknown>(type: string, url: string, data: object) {
    let promise = null
    switch (type) {
      case 'GET':
        promise = axios.get<T>(url, { params: data })
        break
      case 'POST':
        promise = axios.post<T>(url, data)
        break
      case 'PUT':
        promise = axios.put<T>(url, data)
        break
      case 'DELETE':
        promise = axios.delete<T>(url, data)
        break
      default:
        promise = axios.get<T>(url, { params: data })
        break
    }
    return promise
  }
}

export default HttpRequest
