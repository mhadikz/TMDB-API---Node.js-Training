
module.exports = (domain: string, key: string) => ({
    movieByIdEndpoint: (id: number) => `${domain}/movie/${id}?api_key=${key}`,
    movieTrailersEndpoint: (id: number) => `${domain}/movie/${id}/videos?api_key=${key}`,
    movieQueryEndpoint: (query: string) => `${domain}/search/movie?query=${query}&api_key=${key}`
  });