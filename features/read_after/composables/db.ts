import Dexie, { Table } from 'dexie'
import { Recipe } from 'types/recipes'

const dbName = "recipes"
const dbVersion = 1

export class RecipeDexie extends Dexie {
  recipes!: Table<Recipe>

  constructor() {
    super(dbName)
    this.version(dbVersion).stores({
      recipes: '++id, link'
    })
  }
}

export const db = new RecipeDexie();
