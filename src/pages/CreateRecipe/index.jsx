// CreateRecipe.jsx

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipe.module.css";

export default function CreateRecipe() {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    id: uuidv4(), // Genera un ID único para cada receta
    name: "",
    calories: "",
    image: "",
    ingredients: [],
    instructions: "",
  });

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // Agrega un nuevo ingrediente al estado de ingredientes
  const addIngredient = () => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, ""],
    }));
  };

  // Maneja el cambio en un ingrediente específico
  const handleIngredientChange = (e, index) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = e.target.value;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: newIngredients,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nueva receta:", recipe);

    // Add the new recipe to local storage
    const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    // Redirige a la página de detalles de la receta creada
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className={styles.container}>
      <h1>Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={recipe.calories}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={recipe.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Ingredients:</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(e, index)}
              className={styles.ingredientsInput}
              required
            />
          ))}
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className={styles.instructionsTextarea}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Create Recipe
        </button>
      </form>
    </div>
  );
}
