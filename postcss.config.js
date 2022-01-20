module.exports = {
    parser: 'postcss-scss',
    // plugins: [
    //     // require('postcss-import'),
    //     // require('postcss-nested'),
    //     // require('postcss-extend'),
    //     // require('tailwindcss'),
    //     // require('autoprefixer'),
    // ]
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        'postcss-extend': {},
        tailwindcss: {},
        autoprefixer: {},
    }
}