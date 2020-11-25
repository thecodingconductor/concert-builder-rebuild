const path = require('path');

module.exports = {
    entry: {
        composer: './app/static/js-modules/main/composer.js',
        concertBuilder: './app/static/js-modules/main/concertBuilder.js',
        homepage: './app/static/js-modules/main/homepage.js',
        landing: './app/static/js-modules/main/landing.js',
        browseComposer: './app/static/js-modules/main/browseComposer.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './app/static/dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                "@babel/plugin-proposal-class-properties",
                                {
                                    "loose": true
                                }
                            ]

                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },

}