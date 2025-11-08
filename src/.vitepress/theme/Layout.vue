<script setup lang="ts">
import { useData } from 'vitepress'
import Hero from '../../components/hero.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="ks:h-screen ks:overflow-y-auto ks:motion-safe:scroll-smooth">
    <Hero />
    
    <section
      class="ks:-mt-40 ks:min-h-screen ks:border-t ks:border-white/50 ks:bg-zinc-200 ks:relative ks:z-0 ks:shadow-[-10px_0_20px_rgba(0,0,0,0.05)]">
      <div class="ks:container ks:max-w-4xl ks:mx-auto ks:px-4">
        <div class="ks:py-15">
          <div class="ks:grid ks:sm:grid-cols-4 ks:items-center ks:gap-4 ks:sm:gap-10">
            <div>
              <h2 class="ks:text-2xl ks:font-bold">
                Featured Work
              </h2>
            </div>
            <div class="ks:sm:col-span-3">
              <p class="ks:text-zinc-600">
                A showcase of digital journeys crafted for agencies, startups, and brands that value creativity with purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- <div v-if="frontmatter.home" class="ks:flex ks:flex-col ks:items-center ks:justify-center ks:h-screen">
    <h1 class="ks:text-4xl ks:font-bold">{{ site.title }}</h1>
    <p class="ks:text-lg">{{ site.description }}</p>
    <h2 class="ks:text-2xl ks:font-bold">On Progress</h2>
  </div>
  <div v-else class="ks:flex ks:flex-col ks:items-center ks:justify-center ks:h-screen">
    <a href="/" class="ks:text-lg">Home</a>
    <Content />
  </div> -->
</template>
