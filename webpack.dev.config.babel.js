import webpack from 'webpack';
import path from 'path';
import rucksack from 'rucksack-css';

export default {
  context: path.join(__dirname, './app'),
  entry: {
    html: './index.html',
    app: [
      path.resolve(__dirname, 'app/main.js')],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      chunkFilename: '[name].js'
  },
  devtool: "inline-source-map",
  watch: true,
  module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]'
        },
        {
          test: /\.css$/,
          include: /app/,
          loaders: [
            'style-loader',
            'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          loader: 'style!css'
        },
        {
          test: /\.less$/,
          include: /node_modules/,
          loader: 'style!css!less'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app']
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    hot: true,
    port: process.env.PORT || 8080
  }
};
console.log('ENV: ' + process.env.NODE_ENV);
console.log('webpack build success!!');
