import { Recipe } from "types/recipes";
import { db } from "./db";

const saveRecipe = async (item: Recipe) => {
  try {
    await db.recipes.add(item)
  } catch (error) {
    console.log('failed save recipe.')
  }
}

export {
  saveRecipe
}
