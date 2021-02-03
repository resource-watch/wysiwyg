const path = require('path');
const webpackConfig = require('./styleguide.webpack.js');

module.exports = {
  components: 'lib/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/wrapper'),
  },
  sections: [
    {
      name: 'Wysiwyg',
      components: 'lib/Wysiwyg.js',
    },
  ],
  exampleMode: 'expand',
  usageMode: 'expand',
  showSidebar: false,
  webpackConfig,
  styleguideDir: 'homepage',
};
