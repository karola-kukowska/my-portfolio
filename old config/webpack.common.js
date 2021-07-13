const path = require("path");


module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
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
