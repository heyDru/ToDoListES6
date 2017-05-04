// const path = require('path');


// module.exports = {

//     entry: './apps/js/app/app.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015'],
//                     plugins:['lodash']
//                 }
//             }
//         ]

//     },
//      resolve: {
//     extensions: ['.js', '.css']
//   },
//   devtool: 'eval',
//   watch:true
// }

module.exports = {
    entry: './apps/js/main.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};