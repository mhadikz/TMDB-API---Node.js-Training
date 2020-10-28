const movieController = require('./movieController');
const axios = require('axios');
const MockAdapter = require("axios-mock-adapter");

describe('movie controller', () => {

  beforeAll(() => {
    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios);
    mock.onGet("http://example.com/movie/101?api_key=TEST_KEY").reply(400, {});
    mock.onGet("http://example.com/movie/1?api_key=TEST_KEY").reply(200, {
      id: 1,
      name: "Star Wars",
      productionDate: 1988,
      cast: ['john smith']
    }
    );
  });

  it('movie controller returns 400 on incorrect id.', async () => {

    const req = {
      query: {
        id: 101
      }
    };

    const mockJson = jest.fn();
    const mockNext = jest.fn();
    const mockStatus = jest.fn(() => ({
      json: mockJson
    }));
    const res = {
      json: mockJson,
      status: mockStatus
    };

    await movieController(req, res, mockNext);

    expect(mockStatus).toBeCalledTimes(1);
    expect(mockStatus).toBeCalledWith(400);
    expect(mockJson).toBeCalledTimes(1);
    expect(mockJson).toBeCalledWith({ error: true, message: `movie not found!` });
  });

  it('movie controller returns result on correct id.', async () => {

    const req = {
      query: {
        id: 1
      }
    };

    const mockJson = jest.fn();
    const mockNext = jest.fn();
    const mockStatus = jest.fn(() => ({
      json: mockJson
    }));
    const res = {
      json: mockJson,
      status: mockStatus
    };

    await movieController(req, res, mockNext);

    expect(mockJson).toBeCalledTimes(1);
    expect(mockJson).toBeCalledWith({
      result: {
        id: 1,
        name: "Star Wars",
        productionDate: 1988,
        cast: ['john smith']
      }
    });
  });

});