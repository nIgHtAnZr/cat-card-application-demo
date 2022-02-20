let request = require("request");

const CATAAS_URL = "https://cataas.com/cat/says/";

/**
 * Generate a cat image from API
 *
 * @param {string} greeting Overlay text on image
 * @param {number} width Image width
 * @param {number} height Image height
 * @param {string} colour Greeting text color
 * @param {number} size Greeting text size
 * @returns {Promise<Buffer>} Image as a buffer
 */
async function FetchCatImage(greeting, width, height, colour, size) {
  let r = {
    url:
      CATAAS_URL +
      greeting +
      "?width=" +
      width +
      "&height=" +
      height +
      "&color" +
      colour +
      "&s=" +
      size,
    encoding: "binary",
  };

  return new Promise((resolve, reject) => {
    request.get(r, (err, res, body) => {
      if (err) {
        reject(err);
      }

      resolve({
        body: body,
        width: width,
        height: height,
      });
    });
  });
}

module.exports = { FetchCatImage };
