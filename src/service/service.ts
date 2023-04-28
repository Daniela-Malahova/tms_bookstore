import axios from "axios";

export const serviceApi = axios.create({
  baseURL: "https://64365e0c8205915d34f1a497.mockapi.io",
  headers: { "X-Custom-Header": "foobar" },
});

export const serviceApiBook = axios.create({
  baseURL: "https://642ac13ab11efeb759a1ec00.mockapi.io",
  headers: { "X-Custom-Header": "foobar" },
});
