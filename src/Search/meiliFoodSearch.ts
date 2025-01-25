import { MeiliSearch } from 'meilisearch'
import { readFileSync } from 'fs'
const foods = JSON.parse(readFileSync('./json_foods.json','utf8'))
const recipes = JSON.parse(readFileSync('./json_recipes.json','utf8'))
const kenyanRecipes = JSON.parse(readFileSync('./json_kenyan_recipes.json','utf8'))
import { config } from 'dotenv'
config()
const host = process.env.MEILI_HOST || 'default_host';
const apiKey = process.env.MEILI_API_KEY || 'default_api_key';
const client = new MeiliSearch({
    host,
    apiKey
  })
// client.index('foods').addDocuments(foods,{primaryKey:'uuid'   })
//     .then((res) => console.log(res))
// client.index('kenyanRecipes').addDocuments(kenyanRecipes)
// .then((res) => console.log(res))
// client.index('recipes').addDocuments(recipes,{primaryKey:'uuid'})
//     .then((res) => console.log(res))

client.index('recipes').search('cheese',{attributesToSearchOn:['NER','recipe_name'],limit:10}).then((res) => console.log(res))

  

