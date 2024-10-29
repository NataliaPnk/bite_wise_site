export const getRecipes = (set_recipes) => {
  fetch ('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(json => set_recipes(json.recipes))
}


export const getSingleRecipe = (recipe_id, set_recipes) => {
  fetch (`https://dummyjson.com/recipes/${recipe_id}`)
  .then(res => res.json())
  .then(json => set_recipes(json))
}
