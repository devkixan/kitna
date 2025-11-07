<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="ks:bg-zinc-200 ks:h-screen ks:overflow-y-auto">
    <section>
      <div class="ks:container ks:mx-auto ks:px-4">
        <div class="ks:flex ks:justify-center">
          <div class="ks:w-lg ks:relative ks:z-0 ks:flex ks:flex-col ks:justify-center">
            <div class="ks:mx-auto ks:h-40 ks:flex ks:items-center ks:justify-center">
              <span class="ks:w-10 ks:-mr-4 ks:relative ks:-z-10 ks:origin-bottom-left ks:skew-x-12 ks:h-full  ks:bg-linear-to-t ks:from-gray-900 ks:from-5% ks:via-20% ks:via-gray-800 ks:to-100% ks:to-gray-800 ks:block"></span>
              <span class="ks:w-10 ks:-ml-4 ks:relative ks:z-10 ks:origin-bottom-right ks:-skew-x-12 ks:h-full ks:bg-linear-to-t ks:from-gray-800 ks:from-5% ks:via-20% ks:via-gray-600 ks:to-100% ks:to-gray-700 ks:block ks:rounded-br-sm"></span>
            </div>
            <div class="ks:-mt-7 ks:shadow-2xl ks:shadow-black/2 ks:bg-white/80 ks:backdrop-blur-2xl ks:ring ks:ring-white ks:rounded-2xl ks:p-4 ks:py-5">
              <div class="ks:mx-auto ks:mb-20 ks:text-xs ks:bg-slate-200 ks:ring ks:ring-white ks:w-15 ks:h-3 ks:rounded-full ks:block">
                <span class="ks:w-10 ks:h-[8px] ks:-translate-x-0.5 ks:rounded-bl-sm ks:mx-auto ks:relative ks:z-10 ks:skew-x-12 ks:bg-linear-to-t ks:from-gray-800 ks:from-5% ks:via-20% ks:via-gray-700 ks:to-100% ks:to-gray-700 ks:block"></span>
              </div>
              <h1 class="ks:text-4xl ks:font-bold">{{ site.title }}</h1>
              <p class="ks:text-lg">{{ site.description }}</p>
              <h2 class="ks:text-2xl ks:font-bold">On Progress</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ks:mt-10 ks:min-h-screen">
      <div class="ks:container ks:mx-auto ks:px-4">
        Hello
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

  <svg class="ks:rounded-b-3xl ks:pointer-events-none ks:fixed ks:inset-0 ks:size-full ks:mix-blend-overlay" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="none">
    <defs>
        <filter id="noise-filter">
            <feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="1" stitchTiles="stitch" result="noise"></feTurbulence>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="coloprimaryNoise"></feColorMatrix>
        </filter>
    </defs>
    <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
  </svg>
</template>
