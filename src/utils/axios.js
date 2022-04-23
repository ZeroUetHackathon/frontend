import axios from "axios";

const ENDPOINT1 = "https://43a8-14-160-24-231.ngrok.io/v1";
const ENDPOINT = "https://58b3-118-70-125-55.ngrok.io/v1";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: ENDPOINT,
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
});

axiosInstance.interceptors.request.use(
  (response) => {
    // const token = localStorage.getItem('accessToken')
    // if (!token) localStorage.removeItem('accessToken')
    // response.headers.authorization = token ? `Bearer ${token}` : ''
    return response;
  },
  (error) => Promise.reject(error?.response)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
