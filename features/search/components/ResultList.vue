<script setup lang="ts">
import RecipeItem from '@/features/search/components/RecipeItem.vue'
import { useSearchResult } from '@/features/search/state'
import { saveRecipe } from '@/features/read_after/composables/saveRecipe';
import { Recipe } from '@/types/recipes';

const result = useSearchResult()
const onAfterRead = (item: Recipe): void => {
  saveRecipe(item)
}
</script>

<template>
  <ul v-if="result">
    <li v-for="item in result" :key="item.cacheId">
      <recipe-item :item="item" :on-read-after="onAfterRead" />
    </li>
  </ul>
</template>
