<template>
    <div class="min-h-screen relative">
      <img
        src="/contact.jpg"
        alt="Contact Home"
        class="object-cover h-full w-full absolute inset-0 -z-0"
      />
    </div>
    <div class="absolute inset-0">
        <ContactContent/>
    </div>
    <div class="h-full relative"></div>
  </template>
  
  <script>
import ContactContent from '~~/components/ContactContent.vue';


  export default {
    components: [ContactContent],
  };
  </script>