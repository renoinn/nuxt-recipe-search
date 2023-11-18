import type { Recipe } from "@/types/recipes";
import { db } from "./db";
import Dexie from "dexie";

const saveRecipe = async (item: Recipe) => {
  try {
    const isExist = await db.recipes.get(item.link)
    if (isExist) {
      console.debug('link is already exist.')
      return;
    }
    await db.recipes.add(Dexie.deepClone(item))
  } catch (error) {
    console.log('failed save recipe.')
  }
}

export {
  saveRecipe
}
