let baseUrl = 'http://localhost:5000/api/';
let url = 'http://localhost:5000/';

if (window.location.host === 'dirasat-dev.falconweb.app') {
  baseUrl = 'https://dirasat-api-dev.falconweb.app/api/';
  url = 'https://dirasat-api-dev.falconweb.app/';
} else if (window.location.host === 'dirasat-qa.falconweb.app') {
  baseUrl = 'https://dirasat-api-qa.falconweb.app/api/';
  url = 'https://dirasat-api-qa.falconweb.app/';
} else if (window.location.host === 'dirasat-staging.falconweb.app') {
  baseUrl = 'https://dirasat-api-staging.falconweb.app/api/';
  url = 'https://dirasat-api-staging.falconweb.app/';
} else if (window.location.host === 'dirasat-international.com') {
  baseUrl = 'https://api.dirasat-international.com/api/';
  url = 'https://api.dirasat-international.com/';
}

module.exports = { baseUrl, url };
