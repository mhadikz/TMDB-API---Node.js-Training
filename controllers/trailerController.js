const trailerModel = require("../models/trailerModel");

const youTubeTrailerList = async (req, res) => {
  try {
    const allTrailers = await trailerModel.getTrailerListFromTMDB(req, res);
    const youTubeTrailers = filterTrailers(allTrailers);
    return youTubeTrailers;
  } catch (err) {
    return err;
  }
};

function filterTrailers(result) {
  const outPutList = [];
  Array.prototype.forEach(result, (video) => {
    console.log(video.type);
    if (video.type === "Trailer" && video.site === "YouTube") {
      const youTubeKey = video.key;
      video.trailerLink = `https://www.youtube.com/watch?v=${youTubeKey}`;
      outPutList.push(video);
    }
  });
  return outPutList;
}

module.exports = {
  youTubeTrailerList,
};
