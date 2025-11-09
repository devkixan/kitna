import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Kishan S. - Frontend Developer & UI/UX Designer in Pokhara, Nepal",
  description: "Frontend Developer & UI/UX Designer in Pokhara, Nepal",
  themeConfig: {
    socialLinks: [
      { icon: 'PhLinkedinLogo', link: 'https://www.linkedin.com/in/kishan-sunar-b4884118a/' },
      { icon: 'PhGithubLogo', link: 'https://github.com/kishansunar00' },
    ],
  },
  head: [
    ['link', { rel: 'icon',  href: '/site/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/site/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site/site.webmanifest' }],
    ['link', { rel: 'android-chrome-192x192', href: '/site/android-chrome-192x192.png' }],
    ['link', { rel: 'android-chrome-512x512', href: '/site/android-chrome-512x512.png' }],
    ['link', { rel: 'favicon-32x32', href: '/site/favicon-32x32.png' }],
    ['link', { rel: 'favicon-16x16', href: '/site/favicon-16x16.png' }],

    ['meta', { name: 'description', content: 'Frontend Developer & UI/UX Designer in Pokhara, Nepal' }],
    ['meta', { name: 'keywords', content: 'Frontend Developer, UI/UX Designer, Pokhara, Nepal' }],
    ['meta', { name: 'author', content: 'Kishan Sunar' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'google', content: 'notranslate' }],
    ['meta', { name: 'google', content: 'notranslate' }],
  ],
})
