
let baseUrl = "";
let url = "";
if (window.location.host === "dirasat-demo.web.app") {
  baseUrl = "https://dirasat.falconit.com.pk/api/";
  url = "https://dirasat.falconit.com.pk/";
} else if (window.location.host === "dirasat-international.com") {
  baseUrl = "https://dirasat.falconit.com.pk/api/";
  url = "https://dirasat.falconit.com.pk/";
} else {
  baseUrl = 'http://localhost:5000/api/';
  url = 'http://localhost:5000/';
}

module.exports = { baseUrl, url };
