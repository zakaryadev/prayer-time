import axios from "axios";

const getTime = axios.create({
  baseURL: "https://islomapi.uz/api/present/",
});

export { getTime };
