const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".sass", ".scss"]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
