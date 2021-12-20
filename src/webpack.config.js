config.module.rules.push({
    /*test: /\.extension$/,*/
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto'
});