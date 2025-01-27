import { MeiliSearch } from 'meilisearch'
import { config } from 'dotenv'
import { KenyanRecipe, parseKenyanRecipes, parseRecipes, Recipe } from '../sqlDB/mysqlDB.js'
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

export async function searchRecipes(searchTerm:string,region:string){
  if(region=='kenyan'){
    const results=await client.index('kenyanRecipes').search(searchTerm,{attributesToSearchOn:['ingridients','recipe_name'],limit:10})
    console.log(results)
    return parseKenyanRecipes(results.hits as KenyanRecipe[])  
    // return results.hits
  }
  else{
    const results=await client.index('recipes').search(searchTerm,{attributesToSearchOn:['NER','recipe_name'],limit:10})
    console.log(results)
    return parseRecipes(results.hits as Recipe[])
  } 
}
export async function searchFoods(searchTerm:string){
  const results=await client.index('foods').search(searchTerm,{attributesToSearchOn:['food_name'],limit:10})
  console.log(results)
  return results.hits
}
// client.index('recipes').updateSearchableAttributes([
//   'recipe_name',
//   'NER',
// ]
// )
// client.index('kenyanRecipes').updateSearchableAttributes([
//   'recipe_name',
//   'ingridients',
// ]
// )

// client.index('recipes').search('cheese',{attributesToSearchOn:['NER','recipe_name'],limit:10}).then((res) => console.log(res))

  

