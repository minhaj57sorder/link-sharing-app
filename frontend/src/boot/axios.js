import axios, { Axios } from 'axios';
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// export const backendUrlLink = 'http://localhost:5003';
export const backendUrlLink = 'http://85.31.233.92:5003';
export const api = axios.create({
  withCredentials: true,
  baseURL: backendUrlLink,
});
