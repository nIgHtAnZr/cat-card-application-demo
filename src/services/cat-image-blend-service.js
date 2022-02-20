const Jimp = require("jimp");

/**
 * Join given images
 *
 * @param {Array} imageBuffers
 * @returns {Promise<Jimp>} The generated image
 */
async function BlendImages(imageBuffers) {
  // Converting image buffers to jimp readable images
  const images = imageBuffers.map((imageBuffer) =>
    Jimp.read(Buffer.from(imageBuffer.body, "binary"))
  );

  const imageArray = await Promise.all(images);

  // Getting total width of all the images
  const containerWidth = imageArray.reduce(
    (previousWidth, currentImage) => previousWidth + currentImage.getWidth(),
    0
  );

  // Getting maximum height of container
  const containerHeight = Math.max(
    ...imageArray.map((image) => image.getHeight()),
    500
  );

  // Creating a Jimp container with width and height
  const container = new Jimp(containerWidth, containerHeight);

  // Adding images to container
  for (const [index, value] of imageArray.entries()) {
    // Handling the first image
    if (index === 0) {
      container.blit(value, 0, 0);
    } else {
      container.blit(value, imageArray[index - 1].getWidth() * index, 0);
    }
  }

  return container;
}

module.exports = { BlendImages };
