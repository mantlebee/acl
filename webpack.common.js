const path = require("path");

// Configuration
const entry = "./src/index.ts";
const filename = "index.js";
const outdir = "./dist";

// Module
module.exports = {
  entry,
  module: {
    rules: [
      {
        test: /\.ts$/,
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
