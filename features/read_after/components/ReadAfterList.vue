<script setup lang="ts">
import ReadAfterItem from '@/features/read_after/components/ReadAfterItem.vue'
import { getRecipeList } from '@/features/read_after/composables/getRecipeList'

const result = getRecipeList()
</script>

<template>
  <ul v-if="result">
    <li v-for="item in result.items" :key="item.link">
      <ReadAfterItem :item="item" />
    </li>
  </ul>
</template>

