const path = require('path');


module.exports = {

    entry: './apps/js/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins:['lodash']
                }
            }
        ]

    },
     resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'eval',
  watch:true
}

