const argv = require("minimist")(process.argv.slice(2));

const { FetchCatImage } = require("./src/services/cat-image-fetch");
const { BlendImages } = require("./src/services/cat-image-blend-service");

// Entrypoint and catch any errors
main(argv).catch((err) => {
  console.error("Error", err);
});

/**
 * Generate a cat image with options parsed from command line arguments
 * @param {object} options Options
 */
async function main(options) {
  const {
    greeting = "Hello",
    who = "You",
    width = 400,
    height = 500,
    color = "pink",
    size = 100,
    output = "cat-card.jpg",
  } = options;

  const firstImage = await FetchCatImage(greeting, width, height, color, size);

  const secondImage = await FetchCatImage(who, width, height, color, size);

  Promise.all([firstImage, secondImage])
    .then(async (results) => {
      const final = await BlendImages(results);
      final.writeAsync(output);
      console.log(`Exported joined image to ${output}!`);
    })
    .catch(console.error);
}
