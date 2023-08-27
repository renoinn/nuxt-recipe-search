<script setup lang="ts">
import ResultItem from '@/features/search/components/ResultItem.vue'
import { useSearchResult } from '@/features/search/state'

const result = useSearchResult()
</script>

<template>
  <ul v-if="result">
    <li v-for="item in result.items" :key="item.cacheId">
      <result-item :item="item" />
    </li>
  </ul>
</template>
