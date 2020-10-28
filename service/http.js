const axios = require("axios");


exports.get = function ({ url, headers = {} }) {
  const options = {
    method: 'GET',
    headers: headers,
    url,
  };
  return axios(url);
};


exports.post = function ({ url, headers = {}, body }) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers
    },
    data: qs.stringify(body),
    url,
  };
  return axios(url);
};