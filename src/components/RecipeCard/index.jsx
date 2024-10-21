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
      <p>Ingredients: {ingredients.join(", ")}</p>

      <ol>
        {instructions.map((instruction, index) => (
          <li
            key={index}
            style={{ whiteSpace: "pre-line", marginLeft: "20px" }}
          >
            {instruction}
          </li>
        ))}
      </ol>
      
      <span>Meal type: {mealType}</span>
    </div>
  );
}
