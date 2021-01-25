import axios from "axios";

const host = "http://localhost:4000/api/v1.0/";
// process.env.NODE_ENV === "development"
//   ? "http://localhost:4000/api/v1.0/"
//   : process.env.HOST || "/";

const client = axios.create({
  baseURL: host,
  withCredentials: true,
});

export default client;
