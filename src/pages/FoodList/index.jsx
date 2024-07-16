import React from "react";
import { Link } from "react-router-dom";
import styles from "./FoodList.module.css";
import FoodData from "../../assets/Data.json";
import { useState } from "react";

export default function FoodList() {
  const [foodList, setFoodList] = useState(FoodData);

  const handleDelete = (id) => {
    const updatedFoodList = foodList.filter((food) => food.id !== id);
    setFoodList(updatedFoodList);
  };

  return (
    <div className={styles.foodContainer}>
      <div className={styles.foodCards}>
        {foodList.map((food) => (
          <div key={food.id} className={styles.foodCard}>
            <Link
              to={`/recipeDetails/${food.id}`}
              className={styles.foodCardLink}
            >
              <img src={food.image} alt={food.name} />
              <div className={styles.foodCardInfo}>
                <h3>{food.name}</h3>
                <p>Calories: {food.calories}</p>
              </div>
            </Link>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(food.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
