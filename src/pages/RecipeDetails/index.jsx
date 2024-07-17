import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../RecipeDetails/RecipeDetails.module.css";

function RecipeDetail() {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    // Cargar datos desde localStorage si existen
    const savedFoodList = JSON.parse(localStorage.getItem("foodList"));
    if (savedFoodList) {
      // Buscar la receta seleccionada por su ID (que es un string)
      const selectedFood = savedFoodList.find((item) => item.id === id);
      if (selectedFood) {
        setFood(selectedFood);
      } else {
        setFood(null); // Manejar caso donde la receta no se encuentra
      }
    }
  }, [id]);

  if (!food) {
    return <div>Receta no encontrada</div>;
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
      <p>Calorías: {food.calories}</p>
      <p>Ingredientes: {food.ingredients.join(", ")}</p>
      <div>
        <h3>Instrucciones:</h3>
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
