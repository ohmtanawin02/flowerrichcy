<template>
  <div class="min-h-screen relative">
    <img
      src="/about.png"
      alt="About Home"
      class="object-cover h-full w-full absolute inset-0 -z-0"
    />
  </div>
  <div class="absolute inset-0">
    <AboutHead />
    <AboutContent/>
  </div>
  <div class="h-full relative"></div>
</template>

<script>
import AboutContent from "~~/components/AboutContent.vue";
import AboutHead from "~~/components/AboutHead.vue";
export default {
  components: [AboutHead, AboutContent],
};
</script>