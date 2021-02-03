const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = (env) => ({
  mode: env.NODE_ENV,
  entry: {
    wysiwyg: path.resolve(path.join(__dirname, '..', 'lib/index.js')),
    rw: path.resolve(path.join(__dirname, '..', 'css/components/wysiwyg/index_rw.scss')),
    prep: path.resolve(path.join(__dirname, '..', 'css/components/wysiwyg/index_prep.scss')),
  },
  output: {
    path: path.resolve(path.join(__dirname, '..', 'build')),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    quill: 'quill',
    'react-quill': 'react-quill',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ExtraneousFileCleanupPlugin({ extensions: ['.js'] }),
    ...env.ANALYZER ? [new BundleAnalyzerPlugin()] : [],
  ],
});
