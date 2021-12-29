import axios from "axios";
import { toast } from "react-toastify";

const api = async (method = "get", uri, body) => {
  if (window.location.hostname === "orientator-demo.web.app") {
    axios.defaults.baseURL = "https://orientator.falconconsulting.fr/api";
  } else if (window.location.hostname === "orientator.com") {
    axios.defaults.baseURL = "https://api.orientator.com/api";
  }

  // axios.defaults.baseURL = "http://localhost:5000/api/";
  axios.defaults.withCredentials = true;

  return axios[method](uri, body)
    .then((res) => res)
    .catch((err) => {
      {
        console.log("API Error ---1-----> ", err.response);
        if (err.response?.status === 403) {
          window.location = "/login";
        }
        return toast.error(
          err?.response?.data ? err.response.data : err?.message
        );
      }
    });
};

export default api;
