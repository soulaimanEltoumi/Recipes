import React from "react";
import { useParams } from "react-router-dom";
import foodList from "../../assets/Data.json";

function RecipeDetail() {
  const { id } = useParams();
  const food = foodList.find((food) => food.id === parseInt(id));

  if (!food) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Ingredients: {food.ingredients.join(", ")}</p>
      <p>Instructions: {food.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
