export const getRecipes = (set_recipes) => {
  fetch ('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(json => set_recipes(json.recipes))
}

