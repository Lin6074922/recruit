const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    externals: {
      "BMap": "BMap"
    },
     plugins: [

            new webpack.ProvidePlugin({
      
              $:"jquery",
      
              jQuery:"jquery",
      
              "windows.jQuery":"jquery"
      
            })
      
          ]

  }
}