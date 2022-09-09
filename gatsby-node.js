const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
          module: {
            rules: [
              {
                test: /react-pdf/, // check /pdfjs-dist/ too
                use: loaders.null()
              },
              // {
              //   test: /pdfjs-dist/, // check /pdfjs-dist/ too
              //   use: loaders.null()
              // },
              // {
              //   test: /safer-buffer/,
              //   use: loaders.null()
              // },
            ]
          }
        });
      }
};