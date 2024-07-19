// EditFoodPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import foodList from "../../assets/Data.json";

export default function EditRecipes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);

  useEffect(() => {
    const savedFoodList =
      JSON.parse(localStorage.getItem("foodList")) || foodList;
    const selectedFood = savedFoodList.find((item) => item.id === id);
    if (selectedFood) {
      setFood(selectedFood);
    } else {
      alert("Receta no encontrada");
      navigate("/"); // Redirige a la página de inicio o maneja el error según tu aplicación
    }
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtener la lista de alimentos de localStorage
    const savedFoodList =
      JSON.parse(localStorage.getItem("foodList")) || foodList;
    // Actualizar la receta modificada en la lista
    const updatedFoodList = savedFoodList.map((item) =>
      item.id === food.id ? food : item
    );
    // Guardar la lista actualizada en localStorage
    localStorage.setItem("foodList", JSON.stringify(updatedFoodList));
    navigate("/FoodList");
  };

  if (!food) {
    return <div>Loading...</div>; // Muestra un indicador de carga mientras se obtienen los datos del alimento
  }

  return (
    <div>
      <h2>Edit Recipe: {food.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={food.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="calories">calories:</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={food.calories}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL :</label>
          <input
            type="text"
            id="image"
            name="image"
            value={food.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={food.ingredients.join(", ")}
            onChange={(e) => {
              const ingredients = e.target.value.split(", ");
              setFood((prevFood) => ({ ...prevFood, ingredients }));
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="instructions">instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={food.instructions}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
