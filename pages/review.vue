<template>
    <div class="min-h-screen relative">
      <img
        src="/review.png"
        alt="Review Home"
        class="object-cover h-full w-full absolute inset-0 -z-0"
      />
    </div>
    <div class="absolute inset-0">
      <ReviewHeader/>
      <ReviewContent/>
    </div>
    <div class="h-full relative"></div>
  </template>
  
  <script>
import ReviewContent from '~~/components/ReviewContent.vue';
import ReviewHeader from '~~/components/ReviewHeader.vue';

  export default {
    components: [ReviewHeader,ReviewContent],
  };
  </script>