import type { Recipe } from "@/types/recipes";
import { db } from "./db";

type Pagination = {
  offset: number,
  limit: number,
}
const getRecipeList = async ({ offset, limit }: Pagination): Promise<Recipe[]> => {
  try {
    const list = await db.recipes.offset(offset).limit(limit).toArray()
    return list;
  } catch (error) {
    console.log('failed save recipe.')
  }
  return []
}

export {
  getRecipeList
}

