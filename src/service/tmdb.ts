const { get, post} = require('./http');
const urlFactory = require('./url');
const config = require('../util/config');

const endpoints = urlFactory(config.domain, config.key);

exports.movieById = async function (id: number) {
  const option = {
    url: endpoints.movieByIdEndpoint(id)
  };
  try {
    const response = await get(option);
    return response.data;
  } catch (e) {
    return undefined;
  }

};

exports.queryMovies = async function (query: string) {
  const option = {
    url: endpoints.movieQueryEndpoint(query)
  };
  try {
    const response = await get(option);
    return response.data.results;

  }
  catch(err){
    console.log(err)
  }
};

exports.movieTrailers = async function (id: number) {
  const option = {
    url: endpoints.movieTrailersEndpoint(id)
  };

  const response = await get(option);

  return response.data.results;
};