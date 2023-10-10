import { Recipe } from 'types/recipes'

export const useQuery = () => useState<string>('query', () => '')
export const useSearchResult = () => useState<Recipe[] | null>('searchResult', () => null)

