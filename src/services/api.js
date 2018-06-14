import { create } from "axios";

const api = create({
  baseURL: "http://localhost:3001"
});

export default api;
