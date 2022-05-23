const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", 
  output: {
    path: path.resolve(__dirname, "./dist"), 
    publicPath: "/dist/",
    filename: "bundle.js", 
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 8081,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
