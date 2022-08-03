module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}
