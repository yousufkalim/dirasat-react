let baseUrl = "";
let url = "";
if (window.location.host === "orientator-demo.web.app") {
  baseUrl = "https://orientator.falconconsulting.fr/api";
  url = "https://orientator.falconconsulting.fr";
} else if (window.location.host === "orientator.com") {
  baseUrl = "https://api.orientator.com/api";
  url = "https://api.orientator.com";
} else {
  baseUrl = "http://localhost:5000/api/";
  url = "http://localhost:5000/";
}

module.exports = { baseUrl, url };
