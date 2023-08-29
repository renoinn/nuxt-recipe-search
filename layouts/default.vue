<script setup lang="ts">
import RSHeader from '@/layouts/components/RSHeader.vue'  
</script>

<template>
  <RSHeader />
  <div class="container max-w-screen-lg mx-auto px-5 bg-white font-sans">
    <slot />
  </div>
</template>
