import { defineConfig } from 'vitepress'

const base = '/kitna'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Kishan Sunar",
  description: "Portfolio",
  themeConfig: {
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kishan-sunar-b4884118a/' },
      { icon: 'github', link: 'https://github.com/kishansunar00' },
    ],
  },
  head: [
    ['link', { rel: 'icon',  href: base + '/site/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: base + '/site/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: base + '/site/site.webmanifest' }],
    ['link', { rel: 'android-chrome-192x192', href: base + '/site/android-chrome-192x192.png' }],
    ['link', { rel: 'android-chrome-512x512', href: base + '/site/android-chrome-512x512.png' }],
    ['link', { rel: 'favicon-32x32', href: base + '/site/favicon-32x32.png' }],
    ['link', { rel: 'favicon-16x16', href: base + '/site/favicon-16x16.png' }],

    ['meta', { name: 'description', content: 'Frontend Developer & UI/UX Designer in Pokhara, Nepal' }],
    ['meta', { name: 'keywords', content: 'Frontend Developer, UI/UX Designer, Pokhara, Nepal' }],
    ['meta', { name: 'author', content: 'Kishan Sunar' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'google', content: 'notranslate' }],
    ['meta', { name: 'google', content: 'notranslate' }],
  ],
})
