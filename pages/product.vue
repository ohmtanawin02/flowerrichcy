<template>
    
    <div class="min-h-screen relative">
      <img
        src="/product.png"
        alt="Product Home"
        class="object-cover h-full w-full absolute inset-0 -z-0"
      />
    </div>
    <div class="absolute inset-0">
        <ProductHead/>
        <ProductContent/>
        <Productfooter/>
    </div>
    <div class="h-full relative"></div>
  </template>
  
 <script>

import ProductContent from '~~/components/ProductContent.vue'
import Productfooter from '~~/components/Productfooter.vue'
import ProductHead from '~~/components/ProductHead.vue'
 export default {
    components:[ProductHead,ProductContent,Productfooter]
 }
 </script>