import axios from "axios";

export const serviceApi = axios.create({
  baseURL: "https://64365e0c8205915d34f1a497.mockapi.io",
  headers: { "X-Custom-Header": "foobar" },
});
