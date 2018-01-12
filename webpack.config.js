
module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};