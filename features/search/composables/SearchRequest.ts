import { SearchRequest, SearchResponse } from '@/types/search'

const domain = {
  api: ''
}

export const searchRequest = async (query: string): Promise<SearchResponse | null> => {
  const params: SearchRequest = {
    q: query,
    start: 1,
    num: 10,
  }

  const data = await useAsyncData(
    'recipe',
    () => $fetch<SearchResponse>(`https://${domain.api}/search`, { params: params })
  )

  return data.data.value
}

