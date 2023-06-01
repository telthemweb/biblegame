import colors from 'vuetify/es5/util/colors'
//const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // mode:'spa',
  target: 'static',
  generate: {
    dir: 'dist'
  },
  manifest: {
    name: 'Smileweekly',
    lang: 'en',
    orientation: 'portrait',
    background_color: '#FFFFFF',
    theme_color: '#F8F8F8',
    theme_color: '#F8F8F8',
    icons: [
      {
        src: '/img/logo.png',
        sizes: '196x196',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },
  head: {
    title: 'Smileweekly',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          register: { url: '/register', method: 'post' },
          logout: false,
          user: { url: '/profile', method: 'get' }
        }
      }
    },
    redirects: {
      login: '/',
      register: '/',
      logout: '/',
      home: '/dashboard'

    }
  },
  firebase: {
    lazy: false,
    config: {
      apiKey: "AIzaSyDgKraaNeGgKKSg9EMA1Mwcl0sOzI--XvQ",
        authDomain: "projectx-ussd-game.firebaseapp.com",
        projectId: "projectx-ussd-game",
        storageBucket: "projectx-ussd-game.appspot.com",
        messagingSenderId: "971406964195",
        appId: "1:971406964195:web:81d1eaade7bc3727875cd6",
        measurementId: "G-W4WTTLJ0C9",
        databaseURL: "https://projectx-ussd-game-default-rtdb.firebaseio.com",
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
        // emulatorPort: isDev && useEmulators ? 9099 : undefined,
        disableEmulatorWarnings: false,
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
        // emulatorPort: isDev && useEmulators ? 8080 : undefined,
      },
      functions: {
        //emulatorPort: isDev && useEmulators ? 12345 : undefined,
      },
      storage: {
        // emulatorPort: isDev && useEmulators ? 9199 : undefined,
        emulatorHost: 'localhost',
      },
      database: {
        // emulatorPort: isDev && useEmulators ? 9000 : undefined,
      },
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000,
          minimumFetchIntervalMillis: 43200000,
        },
        defaultConfig: {
          welcome_message: 'Welcome',
        },
      },
      // breaks the app with 'app.$fire.firestore.collection is not a function':
      appCheck: true,

    },
  },





  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/auth',
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDgKraaNeGgKKSg9EMA1Mwcl0sOzI--XvQ",
          authDomain: "projectx-ussd-game.firebaseapp.com",
          projectId: "projectx-ussd-game",
          storageBucket: "projectx-ussd-game.appspot.com",
          messagingSenderId: "971406964195",
          appId: "1:971406964195:web:6c9636dd09bd4642875cd6",
          measurementId: "G-52C1Z9ZK8L"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default,
          }
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     babel: {
      compact: true,
     },
  }
}
