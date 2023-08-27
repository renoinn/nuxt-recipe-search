import { SearchResponse } from '@/types/search'

export const useQuery = () => useState<string>('query', () => '')
export const useSearchResult = () => useState<SearchResponse | null>('searchResult', () => null)

