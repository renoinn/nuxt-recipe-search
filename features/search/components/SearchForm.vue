<script setup lang="ts">
import { searchRequest } from '@/features/search/composables/SearchRequest'
import { useQuery, useSearchResult } from '@/features/search/state'

const query = useQuery()
const searchResult = useSearchResult()
  
const handleClick = async () => {
  const result = await searchRequest(query.value);
  searchResult.value = result
};
</script>

<template>
  <div>
    <form>
      <input type="text" placeholder="input query" v-model="query" />
      <input type="submit" value="検索" @click.prevent="handleClick()" />
    </form>
  </div>
</template>

