/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = (env, argv) => {
    argv.mode = argv.mode ?? "development";
    console.log("running webpack with mode:", argv.mode);
    const config = {
        entry: "./src/index.ts",
        mode: argv.mode,
        target: "node",
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: "/",
            filename: "my-service.js"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        externals: [
            nodeExternals({})
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"]
                },
                {
                    test: /\.tsx?$/,
                    use: ["ts-loader"]
                }
            ]
        },
        devtool: "source-map"
    };

    return config;
};
