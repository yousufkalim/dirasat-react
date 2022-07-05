import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from '../config';

const api = async (method = 'get', uri, body) => {
  // API Call
  const url = baseUrl + uri;
  // if (window.location.hostname === "orientator-demo.web.app") {
  //   axios.defaults.baseURL = "https://orientator.falconconsulting.fr/api";
  // } else if (window.location.hostname === "orientator.com") {
  //   axios.defaults.baseURL = "https://api.orientator.com/api";
  // } else {
  //   axios.defaults.baseURL = "http://localhost:5000/api/";
  // }

  axios.defaults.withCredentials = true;

  return axios[method](url, body)
    .then((res) => res)
    .catch((err) => {
      {
        console.log('API Error ---1-----> ', err.response);
        if (err.response?.status === 403) {
          window.location = '/login';
        }
        return toast.error(
          err?.response?.data ? err.response.data : err?.message
        );
      }
    });
};

export default api;
