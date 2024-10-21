import React, { useContext } from "react";
import s from "../RecipesContainer/index.module.css";
import { Context } from "../../context";
import RecipeCard from "../RecipeCard";

export default function RecipesContainer() {
  const { recipes } = useContext(Context);

  return (
    <div className={s.recipesContainer}>
      {recipes
        .filter((el, index) => index <= 11)
        .map((el) => (
          <RecipeCard key={el.id} {...el.instruction} {...el} />
        ))}
    </div>
  );
}
