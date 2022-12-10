import axios from "axios";

export default () => {
  const baseURL = process.env.REACT_APP_BASE_API;
  const axiosInstance = axios.create({
    baseURL: baseURL,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
