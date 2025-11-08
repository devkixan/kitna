import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  base: "/kitna",
  title: "Kishan Sunar",
  description: "Portfolio",
  themeConfig: {
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kishan-sunar-b4884118a/' },
      { icon: 'github', link: 'https://github.com/kishansunar00' },
    ],
  },
})
