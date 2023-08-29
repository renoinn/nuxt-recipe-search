<script setup lang="ts">
import ResultList from '@/features/search/components/ResultList.vue'
import SearchForm from '@/features/search/components/SearchForm.vue'
</script>

<template>
  <div>
    <search-form class="mx-auto my-7 text-center" />
    <result-list />
  </div>
</template>
