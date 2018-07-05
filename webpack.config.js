const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const ExtractCSSPlugin = require("extract-css-chunks-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve("src"),
        use: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.css$/,
        use: [ExtractCSSPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          ExtractCSSPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ["url-loader?limit=100000"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules"]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new ExtractCSSPlugin({ hot: true }),
    new HTMLPlugin({
      title: "Recipes",
      template: "./src/assets/templates/index.ejs"
    })
  ]
};
