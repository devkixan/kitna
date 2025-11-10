<script setup>
import { useData } from 'vitepress'
import Hero from '../../components/hero.vue'
import Projects from '../../components/Projects.vue'
import Footer from '../../components/footer.vue'
import Testimonial from '../../components/testimonial.vue'
import Arc from '../../components/arc.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="ks:h-screen ks:overflow-y-auto ks:motion-safe:scroll-smooth" role="main">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PHJB2C2D');</script>
    <!-- End Google Tag Manager -->

    <Hero />
    
    <Projects />
    
    <Testimonial />

    <Footer />

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHJB2C2D"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
  </div>
</template>
