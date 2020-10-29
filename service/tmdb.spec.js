const { movieById } = require('./tmdb');
const axios = require('axios');
const MockAdapter = require("axios-mock-adapter");

describe('TMDB Service', () => {

  beforeAll(() => {
    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios);
    mock.onGet("http://example.com/movie/1?api_key=TEST_KEY").reply(200, {
      id: 1,
      name: "Star Wars",
      productionDate: 1988,
      cast: ['john smith']
    });
  });


  it('getMovieById', async () => {
    const movie = await movieById(1);
    expect(movie.name).toEqual('Star Wars');
  });

});