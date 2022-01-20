module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('postcss-extend'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}