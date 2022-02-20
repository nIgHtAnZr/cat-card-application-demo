# cat-card-application-demo
Combine random cat images with a overlay text using images of cats from Cat as a Service (https://cataas.com).

## Prerequisite 
Programme has been written in Node.js and using npm for package managing. install
  - node v12.18.4 or higher
  - npm v6.14.8 or higher

## Instructions to generate image

1. Clone the repository
2. Navigate to project folder. 
3. Run `npm install` to install necessary dependencies. 
4. Run `npm run start` or `node app.js` to create cat images. 

- By default application will generate custom texts and image properties.But, if you want to set custom texts & image properties by yourself, pass them as command line arguments:  
  - `node app.js --greeting hello --who kitty --width 300 --height 300 --color red --size 100`
  
  - Available Options as command line arguments
    * greeting:
        First image text argument.
    * who:
        Second image text argument.
    * output:
        image output location. 
    * Image Options:
        - width:
            Custom image width
        - height:
            Custom image height
        - color:
            Custom text color
        - size:
            Custom image size
            
  
## Changelog

Replaced packages from initial application are listed below.

  - `@mapbox/blend` has a dependency on `mapnik` package which has dropped the support for windows binaries. Therefore, it is unable to install in windows environments. Replaced it with `Jimp` package. 

