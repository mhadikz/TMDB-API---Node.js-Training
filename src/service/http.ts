const axios = require("axios");
import { GetParams, PostParams } from '../util/interfaces'

exports.get = function (params: GetParams) {
    const options = {
      method: params.method,
      headers: params.headers,
      url: params.url,
    };
    return axios(params.url);
  };


exports.post = function (params: PostParams) {
  const options = {
    method: params.method,
    headers: {
      'content-type': 'application/json',
      ...params.headers
    },
    //data: qs.stringify(params.body),
    url: params.url,
  };
  return axios(params.url);
};