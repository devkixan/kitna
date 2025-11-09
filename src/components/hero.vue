<script setup>
import Logo from '../components/logo.vue'
import { useData } from 'vitepress'

const { site } = useData()
</script>

<template>
  <section class="ks:hero-section">
    <div class="ks:container ks:mx-auto ks:px-4">
      <div class="ks:flex ks:justify-center">
        <div class="ks:hero-card-wrapper">
          <div class="ks:card-ribbon">
            <div
              class="ks:card-ribbon-left">
            </div>
            <div
              class="ks:card-ribbon-right">
              <span class="ks:card-ribbon-right-text">
                #FrontendDeveloper #UI/UX Designer #Salesforce Developer
              </span>
            </div>
          </div>

          <div
            class="ks:-mt-7 ks:relative ks:hero-card">
            <span
              class="ks:absolute ks:inset-0 ks:bg-linear-to-r ks:via-white/10 ks:from-primary-200 ks:to-primary-200 ks:rounded-[inherit]"></span>

            <div
              class="ks:mx-auto ks:mb-8 ks:hero-card-ribbon-hole">
              <span class="ks:w-10 ks:h-[8px] ks:-translate-x-0.5 ks:hero-card-ribbon-hole-inner"></span>
            </div>


            <span class="ks:absolute ks:top-2 ks:left-2 ks:icon-btn">
              <Logo class="ks:size-6 ks:text-primary-700" />
            </span>

            <div class="ks:absolute ks:top-2 ks:right-2 ks:flex ks:gap-2">
              <a :href="site.themeConfig.socialLinks.linkedin ?? ''" target="_blank" class="ks:icon-btn">
                <PhLinkedinLogo weight="bold" class="ks:size-5 ks:text-primary-700" />
              </a>
              <a :href="site.themeConfig.socialLinks.github ?? ''" target="_blank" class="ks:icon-btn">
                <PhGithubLogo weight="bold" class="ks:size-5 ks:text-primary-700" />
              </a>
            </div>

            <div class="ks:flex ks:flex-col ks:items-center ks:justify-center ks:relative">
              <div class="ks:mb-2 ks:text-center">
                <h1 class="ks:text-3xl ks:text-shadow-sm ks:text-shadow-white/20 ks:text-primary-800">
                  {{ site.title }}
                </h1>
                <span class="ks:text-primary-500 ks:text-shadow-sm ks:text-shadow-white/20 ks:block">
                  Web Designer & Developer
                </span>
              </div>
              <figure class="ks:w-full ks:aspect-square">
                <img src="/profile.png" alt="Profile"
                  class="ks:grayscale ks:size-full ks:object-cover ks:mask-alpha ks:mask-b-black ks:mask-b-from-50% ks:mask-t-transparent" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="ks:hero-section-noise"
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