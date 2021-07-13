const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
          }),
        ],

  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader",
        exclude: /node_modules/,
       },
      {
        test: /\.html$/,
        use: [
          {
          loader: "html-loader",
          options: {
            interpolation: false
          }
        }
      ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
    ]
  }
};
