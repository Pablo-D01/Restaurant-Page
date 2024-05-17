const path = require("path");

module.exports = {
  mode: "development", // Dodaj tę linię
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Wyczyść katalog output przed każdym buildem
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
