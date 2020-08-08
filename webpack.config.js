
module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
        // Use external version of React
        'react': 'react',
        'react-dom': 'react-dom'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
            }
        ]
    }
}
