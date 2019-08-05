const path = require("path");

// Configuration
const mode = "development";
const entry = {
  app: "./src/index.ts"
};
const filename = "[name].bundle.js";
const outdir = "dist";

// Module
module.exports = {
  mode,
  entry,
  devtool: "inline-source-map",
  devServer: {
    contentBase: outdir
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    filename,
    path: path.resolve(__dirname, outdir)
  }
};
