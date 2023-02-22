const path = require("path");
const autoprefixer = require("autoprefixer");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: ["./main.scss", "./main.js"],
    output: {
        path: path.resolve(__dirname, "."),
        filename: "main.min.js",
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    devServer: {
        static: ["."],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "main.min.css",
                        },
                    },
                    { loader: "extract-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer()],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ["./node_modules"],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        ],
    },
};
