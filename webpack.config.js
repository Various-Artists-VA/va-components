const path = require('path');

module.exports = {
      mode: "development", devtool: "inline-source-map",
      entry: [ "./src/index.ts" ], 
      output: {
          filename: 'index.js',
          path: path.resolve(__dirname, 'dist'),
          library: 'vs-components',
          libraryTarget: 'commonjs',
      },
      resolve: {
          // Add `.ts` and `.tsx` as a resolvable extension.
          extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
      },
      module: {
          rules: [
            { 
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, './src')
              },
                { test: /\.tsx?$/, loader: "ts-loader" }, 
          ]
      }
  }; 