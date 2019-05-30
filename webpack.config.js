var webpack = require('webpack');
let path = require('path');

module.exports = {

  entry: {
    app: ['./introduceSite/public/js/frontendController.js'],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/introduceSite/public/build',
    library: 'frontendController'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      'html2canvas': path.join(__dirname, '../node_modules/html2canvas/dist/html2canvas.js')
    }
  }
};
