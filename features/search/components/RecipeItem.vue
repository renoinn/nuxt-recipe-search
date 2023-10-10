<script setup lang="ts">
import { Recipe } from 'types/recipes';

const props = defineProps<{
  item: Recipe,
  onReadAfter: (item: Recipe) => void,
}>()
</script>

<template>
  <div>
    <a :href="item.link" target="_blank">
      <h3>{{ item.title }}</h3>
      <p>{{ item.snippet }}</p>
      <p><img :src="item.thumbnail_src"></p>
      <p>{{ item.displayLink }}</p>
      <p><button @click.prevent="onReadAfter(item)">read after</button></p>
    </a>
  </div>
</template>

