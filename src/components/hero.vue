<script setup>
import Logo from '../components/logo.vue'
import { useData } from 'vitepress'

const { site } = useData()
</script>

<template>
  <section class="ks:bg-zinc-300 ks:sticky ks:z-0 ks:top-0">
    <div class="ks:container ks:mx-auto ks:px-4">
      <div class="ks:flex ks:justify-center">
        <div class="ks:w-sm ks:relative ks:z-0 ks:flex ks:flex-col ks:justify-center">
          <div class="ks:mx-auto ks:h-40 ks:pointer-events-none ks:select-none ks:flex ks:items-center ks:justify-center">
            <div
              class="ks:w-10 ks:-mr-4 ks:relative ks:-z-10 ks:origin-bottom-left ks:skew-x-20 ks:h-full  ks:bg-linear-to-t ks:from-zinc-900 ks:from-5% ks:via-20% ks:via-zinc-800 ks:to-100% ks:to-zinc-800 ks:flex ks:items-center ks:justify-center">
            </div>
            <div
              class="ks:w-10 ks:-ml-4 ks:relative ks:z-20 ks:origin-bottom-right ks:-skew-x-20 ks:h-full ks:bg-linear-to-t ks:from-zinc-800 ks:from-5% ks:via-20% ks:via-zinc-600 ks:to-100% ks:to-zinc-700 ks:rounded-br-sm ks:overflow-clip ks:flex ks:items-center ks:justify-center">
              <span class="ks:[writing-mode:sideways-lr] ks:text-white/40 ks:tracking-wider ks:text-nowrap ks:mix-blend-color-darken">
                #FrontendDeveloper #UI/UX Designer #Salesforce Developer
              </span>
            </div>
          </div>
          <div
            class="ks:-mt-7 ks:overflow-clip ks:shadow-2xl ks:shadow-black/10 ks:bg-zinc-200 ks:ring ks:ring-white/60 ks:rounded-4xl ks:p-4 ks:py-5 ks:relative">
            <span
              class="ks:absolute ks:inset-0 ks:bg-linear-to-r ks:via-white/10 ks:from-zinc-200 ks:to-zinc-200 ks:rounded-[inherit]"></span>

            <div
              class="ks:mx-auto ks:mb-8 ks:text-xs ks:bg-zinc-300 ks:ring ks:ring-white/60 ks:w-15 ks:h-3 ks:rounded-full ks:block">
              <span
                class="ks:w-10 ks:h-[8px] ks:-translate-x-0.5 ks:rounded-bl-sm ks:mx-auto ks:relative ks:z-10 ks:skew-x-12 ks:bg-linear-to-t ks:from-zinc-800 ks:from-5% ks:via-20% ks:via-zinc-700 ks:to-100% ks:to-zinc-700 ks:block"></span>
            </div>


            <a href="" class="ks:absolute ks:top-2 ks:left-2 ks:size-10 ks:flex ks:items-center ks:justify-center ks:bg-white/20 ks:backdrop-blur-2xl ks:ring ks:ring-zinc-100 ks:rounded-full">
              <Logo class="ks:size-6 ks:text-zinc-700" />
            </a>

            <div class="ks:absolute ks:top-2 ks:right-2 ks:flex ks:gap-2">
              <a href="" class="ks:size-10 ks:flex ks:items-center ks:justify-center ks:bg-white/20 ks:backdrop-blur-2xl ks:ring ks:ring-zinc-100 ks:rounded-full ks:hover:bg-zinc-200">
                <PhLinkedinLogo weight="bold" class="ks:size-5 ks:text-zinc-700" />
              </a>
              <a :href="site.themeConfig.socialLinks.github ?? ''" class="ks:size-10 ks:flex ks:items-center ks:justify-center ks:bg-white/20 ks:backdrop-blur-2xl ks:ring ks:ring-zinc-100 ks:rounded-full ks:hover:bg-zinc-200">
                <PhGithubLogo weight="bold" class="ks:size-5 ks:text-zinc-700" />
              </a>
            </div>

            <div class="ks:flex ks:flex-col ks:items-center ks:justify-center ks:relative">
              <div class="ks:mb-2 ks:text-center">
                <h1 class="ks:text-3xl ks:text-shadow-sm ks:text-shadow-white/20 ks:text-zinc-800">{{ site.title }}
                </h1>
                <span class="ks:text-zinc-500 ks:text-shadow-sm ks:text-shadow-white/20 ks:block">Designer &
                  Developer</span>
              </div>
              <figure>
                <img src="/profile.png" alt="Profile"
                  class="ks:grayscale ks:w-full ks:h-full ks:object-cover ks:mask-alpha ks:mask-b-black ks:mask-b-from-50% ks:mask-t-transparent" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="ks:rounded-b-3xl ks:pointer-events-none ks:absolute ks:inset-0 ks:size-full ks:mix-blend-overlay"
      xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%"
      height="100%" preserveAspectRatio="none">
      <defs>
        <filter id="noise-filter">
          <feTurbulence type="turbulence" baseFrequency="0.6" numOctaves="1" stitchTiles="stitch" result="noise">
          </feTurbulence>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="coloprimaryNoise">
          </feColorMatrix>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
    </svg>
  </section>
</template>