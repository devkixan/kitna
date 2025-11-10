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
