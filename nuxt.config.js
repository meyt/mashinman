
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'mashinman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Automotive Diagnostics Tool' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', size: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: 'favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'manifest', href: 'site.webmanifest' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#468706' }
    ]
  },
  router: {
    mode: 'hash',
    base: process.env.BUILD_STATE === 'local' ? './' : '/mashinman/'
  },
  plugins: [
    '~/plugins/vuetify.js'
  ],
  css: [
    '~/assets/style/material-icons-font.css',
    '~/assets/style/vazir-font.css',
    'vuetify/dist/vuetify.min.css',
    '~/assets/style/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
