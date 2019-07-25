import axios from "axios";

let UrlAPI = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: UrlAPI,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  }
};
