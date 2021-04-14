const path = require('path');

const outputPath = path.join(__dirname, 'lib');
const indexFile = path.join(__dirname, 'src/renderChartToString.jsx');

module.exports = {
  target: 'node',
  entry: {
    app: indexFile,
  },
  output: {
    path: outputPath,
    filename: 'renderChartToString.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.module\.(sa|sc|c)ss$/,
      //   use: [
      //     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1,
      //         modules: true,
      //         sourceMap: isDev,
      //         ...(isDev
      //           ? { localIdentName: '[path]_[name]_[local]' }
      //           : {
      //               getLocalIdent: (context, loacalIdentName, localName) =>
      //                 uniqueIdGenerator(localName, context.resourcePath),
      //             }),
      //       },
      //     },
      //     'postcss-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDev,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   exclude: /\.module\.(sa|sc|c)ss$/,
      //   use: [
      //     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDev,
      //       },
      //     },
      //   ],
      // },
    ],
  },
};
