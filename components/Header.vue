<template>
    <header
      class="
        flex
        items-center
        justify-between
      "
    >
      <ul class="flex flex-row mr-4 mt-4 space-x-5 text-sm pl-20 font-light">
        <template :key="`navItem-${i}`" v-for="(n, i) in nav">
          <li class="nav-item pl-20 text-white font-base pt-6  text-base">
            <NuxtLink :to="n.link">
              {{ n.name }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </header>
  </template>
    
  <script setup>
  const nav = [
    {
      name: "หน้าแรก",
      link: "/",
    },
    {
      name: "สินค้าและบริการของเรา",
      link: "/product",
    },
    {
      name: "ผลงานของเรา",
      link: "/performance",
    },
    {
      name: "บทความและข่าวสาร",
      link: "/blog",
    },
    {
      name: "เกี่ยวกับเรา",
      link: "/about",
    },
    {
      name: "รีวิว",
      link: "/review",
    },
    {
      name: "ติดต่อ",
      link: "/contact",
    }
  ];
  </script>