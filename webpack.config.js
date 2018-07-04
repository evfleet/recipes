const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");

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
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["src", "node_modules"]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new HTMLPlugin({
      title: "Recipes",
      template: "./src/assets/templates/index.ejs"
    })
  ]
};
