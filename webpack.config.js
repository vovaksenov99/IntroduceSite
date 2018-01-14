var webpack = require('webpack');

module.exports = {

  entry: './introduceSite/public/js/frontendController.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: __dirname + '/introduceSite/public/build',
    library: 'frontendController'
  },
};
