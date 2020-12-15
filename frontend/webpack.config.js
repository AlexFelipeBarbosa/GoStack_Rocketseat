const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  // entry: './src/index.js'  -- poderia ser assim, mas dessa forma não funciona no Windows.
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        /* Resumindo o trecho abaixo: Toda vez que utilizar um arquivo .js e esse arquivo não estiver na 
        pasta node_modules, então converta ela para babel
        */
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
