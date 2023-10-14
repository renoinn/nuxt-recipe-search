<script setup lang="ts">
import { Recipe } from '@/types/recipes'

const props = defineProps<{
  item: Recipe,
}>()
</script>

<template>
  <div>
    <a :href="item.link" target="_blank">
      <h3>{{ item.title }}</h3>
      <p>{{ item.snippet }}</p>
      <p><img :src="item.thumbnail_src"></p>
      <p>{{ item.displayLink }}</p>
      <p><button>delete</button></p>
    </a>
  </div>
</template>
