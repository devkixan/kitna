<template>
  <section
    class="ks:-mt-32 ks:border-t ks:border-white/50 ks:bg-primary-200 ks:relative ks:z-0 ks:shadow-[0-10px_10px_rgba(0,0,0,0.028)]">
    <div class="ks:container ks:max-w-4xl ks:mx-auto ks:px-4">
      <div class="ks:pt-15">
        <div class="ks:grid ks:sm:grid-cols-4 ks:gap-4 ks:sm:gap-10 ks:mb-15">
          <div>
            <h2 class="ks:text-2xl ks:text-primary-900 ks:font-medium">
              Featured Work
            </h2>
          </div>
          <div class="ks:sm:col-span-3">
            <p class="ks:text-zinc-600">
              A showcase of digital journeys crafted for agencies, startups, and brands that value creativity with purpose.
            </p>
          </div>
        </div>

        <div class="ks:flex ks:flex-col ks:*:pb-6 ks:*:last:pb-15 ks:*:not-first:pt-6 ks:divide-y ks:divide-white/40">
          <template v-for="project in projects" :key="project.name">
            <article class="ks:flex ks:not-sm:flex-col ks:sm:items-center ks:gap-x-10 ks:gap-y-4 ks:group ks:px-2.5 ks:sm:px-5 ks:odd:not-first:border-l ks:even:border-r ks:border-zinc-100">
              <img :src="project.image" :alt="project.name" class="ks:sm:w-50 ks:grayscale ks:group-hover:grayscale-0 ks:w-full ks:aspect-video ks:bg-primary-300 ks:object-cover ks:object-top-left ks:rounded-xl ks:[font-size:0]">
              <div class="ks:flex ks:not-sm:flex-col ks:sm:items-center ks:justify-between ks:w-full ks:gap-4 ks:mb-1">
                <div>
                  <h3 class="ks:font-medium ks:mb-px ks:group-hover:text-blue-900 ks:transition ks:duration-300">
                    {{ project.name }}
                  </h3>
                  <p class="ks:text-zinc-500">
                    {{ project.description }}
                  </p>
                </div>
                <div class="ks:shrink-0">
                  <a :href="project.link" target="_blank"  class="ks:ring ks:ring-primary-100 ks:py-2 ks:px-3 ks:rounded-full ks:transition ks:text-sm ks:font-medium ks:bg-primary-400/5 ks:hover:bg-primary-400/15 ks:shadow-inner ks:shadow-white/20 ks:inline-flex ks:items-center ks:gap-1">
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
import SlineWebsiteRedesign from '../images/works/sline-website-redesign.png';
import ZeewFoodAppRedesign from '../images/works/zeew-food-app-redesign.jpg';
import RayashipWebsiteFrontendDevelopment from '../images/works/rayaship-website-frontend-development.png';
import TheFireflyTechnologyWebsiteRedesign from '../images/works/the-firefly-technology-website-redesign.png';

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
    name: 'The Firefly Technology Website Redesign',
    description: "Redesigned The Firefly Technology's website to improve the user experience.",
    image: TheFireflyTechnologyWebsiteRedesign,
    link: 'https://thefireflytech.com/'
  }
]
</script>