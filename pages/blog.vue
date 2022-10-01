<template>
    <div class="min-h-screen relative">
      <img
        src="/blog.png"
        alt="Blog Home"
        class="object-cover h-full w-full absolute inset-0 -z-0"
      />
    </div>
    <div class="absolute inset-0">
      <BlogContent/>
    </div>
    <div class="h-full relative"></div>
  </template>
  
  <script>
import BlogContent from '~~/components/BlogContent.vue';

  export default {
    components: [BlogContent],
  };
  </script>