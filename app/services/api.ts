import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message: string;

    const data = error.response?.data;

    if (Array.isArray(data?.message)) {
      message = data.message.join(", ");
    } else if (typeof data?.message === "string") {
      message = data.message;
    } else if (data?.error) {
      message = data.error;
    } else {
      message = error.message || "Unknown error";
    }

    return Promise.reject(new Error(message));
  }
);

export default api;
