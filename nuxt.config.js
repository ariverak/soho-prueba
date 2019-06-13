const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  plugins: [
    '~/plugins/vue-mq.js'
  ],
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/style-resources'
   ],
   styleResources: {
    scss: [
      './styles/_variables.scss',
    ]
  },
   toast: {
       position: 'top-center',
       register: [ // Register custom toasts
         {
           name: 'my-error',
           message: 'Oops...Something went wrong',
           options: {
             type: 'error'
           }
         }
       ]
   }
}