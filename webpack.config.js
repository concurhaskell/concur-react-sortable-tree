module.exports = {
    entry: './js-src/index.js',
    output: {
        path: __dirname + '/jsbits',
        filename: 'index.compiled.js',
        // export itself to a global var: "h$concur"
        libraryTarget: "var",
        library: "h$concur"
    },
    externals: {
        // Load React deps from the concur-react library
        "react": "h$concur.react",
        "react-dom": "h$concur.reactDom"
    }
};
