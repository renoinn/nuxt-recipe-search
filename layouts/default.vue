<script setup lang="ts">
import RSHeader from '@/layouts/components/RSHeader.vue'
import RSMenu from '@/layouts/components/RSMenu.vue'
</script>

<template>
  <RSHeader />
  <div class="container max-w-screen-lg mx-auto px-5 bg-white font-sans">
    <RSMenu />
    <slot />
  </div>
</template>
