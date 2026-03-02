<template>
  <section
    class="ks:projects-section">
    <div class="ks:container ks:max-w-4xl ks:mx-auto ks:px-4">
      <div>
        <div class="ks:grid ks:sm:grid-cols-4 ks:gap-4 ks:sm:gap-10 ks:pb-15 ks:pt-15">
          <div>
            <h2 class="ks:text-2xl ks:text-primary-900 ks:font-medium">
              Featured Work
            </h2>
          </div>
          <div class="ks:sm:col-span-3">
            <p class="ks:text-primary-800 ks:pr-5">
              Explore a selection of featured works built with creativity and intent. From redesigns to frontend builds, every detail is made to connect.
            </p>
          </div>
        </div>

        <div class="ks:flex ks:flex-col ks:gap-10">
          <template v-for="project in projects" :key="project.name">
            <article class="ks:group ks:relative ks:z-0 ks:flex ks:not-sm:flex-col ks:sm:items-center ks:gap-x-10 ks:gap-y-4 ks:group">
              <div class="ks:absolute ks:-inset-2 ks:bg-white/40 ks:rounded-3xl ks:-z-10 ks:not-group-hover:opacity-0 ks:transition ks:duration-200"></div>
              <img :src="project.image" :alt="project.name" class="ks:sm:w-50 ks:grayscale ks:group-hover:grayscale-0 ks:w-full ks:aspect-video ks:bg-primary-300 ks:object-cover ks:object-top-left ks:rounded-xl ks:[font-size:0]">
              <div class="ks:flex ks:not-sm:flex-col ks:sm:items-center ks:justify-between ks:w-full ks:gap-4 ks:mb-1">
                <div>
                  <h3 class="ks:font-medium ks:mb-px ks:group-hover:text-blue-900 ks:transition ks:duration-300">
                    {{ project.name }}
                  </h3>
                  <p class="ks:text-primary-500" aria-hidden="true">
                    {{ project.description }}
                  </p>
                </div>
                <div class="ks:shrink-0">
                  <a :href="project.link" target="_blank" :aria-label="`View ${project.name}`" class="ks:ring ks:ring-primary-400/20 ks:border ks:border-white/60 ks:py-2 ks:px-3 ks:rounded-full ks:transition ks:text-sm ks:font-medium ks:bg-primary-400/5 ks:hover:bg-primary-400/15 ks:shadow-inner ks:shadow-white/20 ks:inline-flex ks:items-center ks:gap-1">
                    <span>View</span>
                    <PhArrowLineUpRight weight="bold" class="ks:size-4 ks:text-primary-500" />
                  </a>
                </div>
              </div>
            </article>
          </template>
        </div>
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