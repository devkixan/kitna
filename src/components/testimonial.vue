<template>
  <section class="ks:bg-primary-200 ks:relative ks:z-0 ks:py-10">
    <div class="ks:container ks:max-w-4xl ks:mx-auto ks:px-4">
      <div class="ks:py-15">
        <div class="ks:max-w-2xl ks:mx-auto ks:mb-10">
          <h2 class="ks:text-center ks:mb-5 ks:text-4xl ks:text-primary-900 ks:font-medium">
            Testimonials
          </h2>
          <p class="ks:text-center ks:text-primary-800 ks:text-lg">
            Recognized for professionalism and quality, each project delivers creative solutions that inspire trust. Every outcome is crafted with precision and intent.
          </p>
        </div>

        <div class="ks:grid ks:sm:grid-cols-2 ks:gap-4 ks:*:rounded-xl ks:*:p-8">
          <template v-for="item in testimonials" :key="item.name">
            <div class="ks:bg-white ks:rounded-xl ks:first:bg-zinc-800 ks:first:text-white ks:group ks:first:row-span-2 ks:flex ks:flex-col ks:justify-between">
              <p class="ks:mb-4 ks:group-first:text-lg">
                {{ item.description }}
              </p>
              <span class="ks:text-zinc-600 ks:text-sm ks:group-first:text-zinc-400">
                {{ item.username }} - {{ item.title }}
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const testimonials = [
  {
    username: 'Mohamed G.',
    title: '@zeewfood',
    description: "Kishan is very professional and he listened to our requirments and was able to achieve what we need. I highly recommend him."
  },
  {
    username: 'Said T.',
    title: '@sline.ma',
    description: "Professional, innovative, and respectful. Always delivering on time with great quality."
  },
  {
    username: 'Tom S.',
    title: '@WebCoderUk',
    description: "Fantastic design skills, Quick response's - Would hire again"
  }
]
</script>