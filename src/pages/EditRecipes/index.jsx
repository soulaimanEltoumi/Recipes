// EditFoodPage.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import foodList from "../assets/Data.json";
import foodList from "../../assets/Data.json";
export default function EditRecipes() {
  const { id } = useParams(); // Obtén el parámetro de la URL
  const [food, setFood] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos del alimento por su ID
    const selectedFood = foodList.find((item) => item.id === id);
    if (selectedFood) {
      setFood(selectedFood);
    } else {
      // Manejo de error si el alimento no se encuentra
      alert("Receta no encontrada");
      // Redirige a una página o maneja el error según tu aplicación
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos actualizados a tu API o actualizar tu estado global
    console.log("Datos actualizados:", food);
    // Redirige a la página de detalles del alimento después de guardar cambios
    // (o maneja la navegación según sea necesario)
  };

  if (!food) {
    return <div>Cargando...</div>; // Muestra un indicador de carga mientras se obtienen los datos del alimento
  }

  return (
    <div>
      <h2>Editar Receta: {food.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
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
          <label htmlFor="calories">Calorías:</label>
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
          <label htmlFor="image">URL de la Imagen:</label>
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
          <label htmlFor="ingredients">Ingredientes:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={food.ingredients.join(", ")} // Convierte el array a string separado por comas
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="instructions">Instrucciones:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={food.instructions}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}
