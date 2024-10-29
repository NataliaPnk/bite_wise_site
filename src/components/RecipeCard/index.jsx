import React from "react";
import s from "../RecipeCard/index.module.css";

export default function RecipeCard({
  id,
  image,
  name,
  ingredients,
  instructions,
  mealType,
}) {
  return (
    <div className={s.recipeCard}>
      <img src={image} />
      <h3>{name}</h3>

      <div>
      <h4>Ingredients</h4>
      <ul>
        {
          ingredients.map((el) => <li key={el} 
          style={{ whiteSpace: "pre-line", marginLeft: "40px" }}
          >{ el }</li>)
        }
      </ul>



        <h4>Instructions</h4>
      <ol>
        {instructions.map((el) => (
          <li
            key={el}
            style={{ whiteSpace: "pre-line", marginLeft: "40px" }}
          >
            {el}
          </li>
        ))}
      </ol>
      
      <span>Meal type: {mealType}</span>
      </div>
    </div>
  );
}
