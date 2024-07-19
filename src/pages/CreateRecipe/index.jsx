import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipe.module.css";
import data from "../../assets/Data.json";

export default function CreateRecipe() {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    id: uuidv4(),
    name: "",
    calories: "",
    image: "",
    ingredients: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArray = recipe.ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    const newRecipe = { ...recipe, ingredients: ingredientsArray };
    const savedFoodList = JSON.parse(localStorage.getItem("foodList")) || data;
    const newFoodList = [...savedFoodList, newRecipe];
    localStorage.setItem("foodList", JSON.stringify(newFoodList));
    navigate("/FoodList");
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
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className={styles.ingredientsTextarea}
            required
          />
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
