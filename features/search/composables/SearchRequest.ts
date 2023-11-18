import { SearchRequest, SearchResponse } from '@/types/search'
import { Recipe } from '@/types/recipes'

export const searchRequest = async (query: string): Promise<Recipe[] | null> => {
  const params: SearchRequest = {
    q: query,
    start: 1,
    num: 10,
  }

  const config = useRuntimeConfig()
  const domain = config.public.searchApiDomain
  const data = await useAsyncData(
    'recipe',
    () => $fetch<SearchResponse>(`https://${domain}/search`, { params: params })
  )

  return data.data.value?.items.map((item) => {
    const recipe: Recipe = {
      cacheId: item.cacheId,
      title: item.title,
      link: item.link,
      displayLink: item.displayLink,
      snippet: item.snippet,
      thumbnail_src: item.pagemap.cse_thumbnail[0].src,
      thumbnail_width: item.pagemap.cse_thumbnail[0].width,
      thumbnail_height: item.pagemap.cse_thumbnail[0].height,
    }
    return recipe
  }) || null
}

