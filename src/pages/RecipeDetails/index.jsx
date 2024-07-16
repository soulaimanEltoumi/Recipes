import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import foodList from "../../assets/Data.json";
import styles from "../RecipeDetails/RecipeDetails.module.css";

function RecipeDetail() {
  const { id } = useParams();
  const food = foodList.find((food) => food.id === id);

  if (!food) {
    return <div>Recipe not found</div>;
  }

  // Función para dividir las instrucciones en una lista de pasos
  const getInstructionsList = (instructions) => {
    // Dividir las instrucciones por el patrón de número seguido de punto y espacio
    return instructions.split(/\d+\. /).filter((step) => step.trim() !== "");
  };

  const instructionsList = getInstructionsList(food.instructions);

  return (
    <div>
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Ingredients: {food.ingredients.join(", ")}</p>
      <div>
        <h3>Instructions:</h3>
        <ol className={styles.ol}>
          {instructionsList.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
