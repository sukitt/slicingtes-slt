import { FileSystemIconLoader } from "unplugin-icons/loaders";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  srcDir: "src/",
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/styles/app.scss',
  ],
  build: {
    transpile: ["vuetify"]
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins?.push(vuetify())
      })
    },
    ['unplugin-icons/nuxt', {
      autoInstall: true,
      customCollections: {
        'local-icons': FileSystemIconLoader('./src/assets/icons')
      }
    }],
    ['nuxt-swiper', {}]
  ]
})
