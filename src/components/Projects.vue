<template>
  <section class="ks:projects-section">
    <div class="ks:container ks:max-w-4xl ks:mx-auto ks:px-4">
      <div class="ks:grid ks:md:grid-cols-2 ks:gap-10">
        <div class="ks:py-20">
          <h2 class="ks:mb-5 ks:text-4xl ks:text-primary-900 ks:font-medium">
            Featured Work
          </h2>
          <div class="ks:sm:col-span-3">
            <p class="ks:text-primary-800 ks:text-lg ks:pr-5">
              Explore a selection of featured works built with creativity and intent. From redesigns to frontend builds, every detail is made to connect.
            </p>
          </div>
        </div>
        <template v-for="project in projects" :key="project.name">
          <figure class="ks:group ks:bg-white ks:rounded-xl ks:relative ks:z-0 ks:flex ks:flex-col ks:gap-x-10 ks:group">
            <img :src="project.image" :alt="project.name" class="ks:group-hover:grayscale-0 ks:w-full ks:aspect-video ks:bg-primary-300 ks:object-cover ks:object-top-left ks:rounded-t-xl ks:[font-size:0]">
            <figcaption class="ks:p-5 ks:h-full ks:flex ks:flex-col ks:justify-between">
              <div class="ks:mb-4">
                <h3 class="ks:font-medium ks:text-lg ks:mb-2 ks:group-hover:text-blue-900 ks:transition ks:duration-300">
                  {{ project.name }}
                </h3>
                <p class="ks:text-primary-500" aria-hidden="true">
                  {{ project.description }}
                </p>
              </div>
              <div class="ks:shrink-0">
                <a :href="project.link" target="_blank" :aria-label="`View ${project.name}`" class="ks:py-2.5 ks:rounded-full ks:underline-offset-4 ks:flex ks:justify-center-safe ks:items-center ks:gap-2 ks:ring ks:ring-zinc-300 ks:hover:bg-zinc-300/10">
                  <span>View</span>
                  <PhArrowLineUpRight weight="bold" class="ks:size-4 ks:text-primary-500" />
                </a>
              </div>
            </figcaption>
          </figure>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup>
import SlineWebsiteRedesign from '../images/works/sline-website-redesign.webp';
import ZeewFoodAppRedesign from '../images/works/zeew-food-app-redesign.webp';
import RayashipWebsiteFrontendDevelopment from '../images/works/rayaship-website-frontend-development.webp';
import TheFireflyTechnologyWebsiteRedesign from '../images/works/the-firefly-technology-website-redesign.webp';
import UnitedTransportWebsiteFrontendDevelopment from '../images/works/go2uta-website.webp';

const projects = [
  {
    name: 'Web Food Ordering Platform Redesign',
    description: "I redesigned and developed ZeewFood.eu's web ordering platform for a clean, mobile-friendly experience.",
    image: ZeewFoodAppRedesign,
    link: 'https://www.zeew.eu'
  },
  {
    name: 'Redesign Sline.ma Website',
    description: 'Redesigned the website for Sline.in to improve the user experience and increase the conversion rate.',
    image: SlineWebsiteRedesign,
    link: 'https://www.sline.ma'
  },
  {
    name: 'Rayaship Website Frontend Development',
    description: "Developed Rayaship's website frontend on the Salesforce platform, creating a responsive and user-friendly interface.",
    image: RayashipWebsiteFrontendDevelopment,
    link: 'https://www.rayaship.com/'
  },
  {
    name: 'United Transport Website Frontend Development',
    description: "Developed United Transport's website frontend on the Salesforce platform, creating a responsive and user-friendly interface.",
    image: UnitedTransportWebsiteFrontendDevelopment,
    link: 'https://www.go2uta.com/'
  },
  {
    name: 'The Firefly Technology Website Redesign',
    description: "Redesigned The Firefly Technology's website to improve the user experience.",
    image: TheFireflyTechnologyWebsiteRedesign,
    link: 'https://thefireflytech.com/'
  }
]
</script>