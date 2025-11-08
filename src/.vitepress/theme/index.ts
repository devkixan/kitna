// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import PhosphorIcons from "@phosphor-icons/vue"
import type { Theme } from 'vitepress'
import './css/style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(PhosphorIcons)
  }
} satisfies Theme

