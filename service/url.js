
module.exports = (domain, key) => ({
  movieByIdEndpoint: (id) => `${domain}/movie/${id}?api_key=${key}`,
  movieTrailersEndpoint: (id) => `${domain}/movie/${id}/videos?api_key=${key}`,
  movieQueryEndpoint: (query) => `${domain}/search/movie?query=${query}&api_key=${key}`
});
