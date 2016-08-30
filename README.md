# ng2-webpack-base

## Setup

Clone repo locally then run `npm install`. Once dependencies are finished downloading run `npm start` and by default the app 
will be dsiplayed at `http://localhost:8080`. If the build fails run `npm install` again to ensure there are no missed 
dependencies. 

##Development

`npm start` runs in development by default. Webpack transpilers ts files at runtime and does not write to disk in development mode.

##Production

`npm build` runs production commands in `./config/webpack.prod.js`. It builds out a `dist` folder with all the concatenated files ready for deployment.

##Further Information

For further information on using webpack with Angular 2 visit https://angular.io/docs/ts/latest/guide/webpack.html
