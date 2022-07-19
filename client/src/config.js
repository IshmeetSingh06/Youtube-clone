import axios from "axios";

export const axiosInstance = axios.create({
  baseURL :  "https://ishtube.herokuapp.com/server/",
});