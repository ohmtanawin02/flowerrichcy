<template>
    <div class="min-h-screen relative">
      <img
        src="/performance.png"
        alt="Performance Home"
        class="object-cover h-full w-full absolute inset-0 -z-0"
      />
    </div>
    <div class="absolute inset-0">
      <PerHead/>
      <PerContent/>
    </div>
    <div class="h-full relative"></div>
  </template>
  
  <script>
import PerContent from '~~/components/PerContent.vue'
import PerHead from '~~/components/PerHead.vue'
    
  export default {
    components:[
    PerHead,
    PerContent
  ],
    
  }
  </script>