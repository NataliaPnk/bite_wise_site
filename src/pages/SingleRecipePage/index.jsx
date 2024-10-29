import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleRecipe } from "../../requests/recipes_req";
import s from "../SingleRecipePage/index.module.css";

export default function SingleRecipePage() {
  const [singleRecipe, setSingleRecipes] = useState({});

  const { recipe_id } = useParams();

  useEffect(() => {
    getSingleRecipe(recipe_id, setSingleRecipes);
  }, []);

  console.log(singleRecipe);

  const { id, image, name, ingredients, instructions, mealType } = singleRecipe;

  return (
    <div className={s.singleRecipe}>
      <img src={image} />

      <div>
        <h3>{name}</h3>
        <div>
          <h4>Ingredients</h4>
          <ul>
            {ingredients &&
              ingredients.map((el) => (
                <li
                  key={el}
                  style={{ whiteSpace: "pre-line", marginLeft: "40px" }}
                >
                  {el}
                </li>
              ))}
          </ul>

          <h4>Instructions</h4>
          <ol>
            {instructions &&
              instructions.map((el) => (
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
    </div>
  );
}
