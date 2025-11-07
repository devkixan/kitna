<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.home" class="ks:flex ks:flex-col ks:items-center ks:justify-center ks:h-screen">
    <h1 class="ks:text-4xl ks:font-bold">{{ site.title }}</h1>
    <p class="ks:text-lg">{{ site.description }}</p>
    <h2 class="ks:text-2xl ks:font-bold">On Progress</h2>
  </div>
  <div v-else class="ks:flex ks:flex-col ks:items-center ks:justify-center ks:h-screen">
    <a href="/" class="ks:text-lg">Home</a>
    <Content />
  </div>
</template>
