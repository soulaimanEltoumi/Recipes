import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./FoodList.module.css";
import Sidebar from "../../components/Sidebar";
import data from "../../assets/Data.json";

export default function FoodList() {
  const [foodList, setFoodList] = useState(
    JSON.parse(localStorage.getItem("foodList")) || data
  );

  const handleDelete = (id) => {
    const updatedFoodList = foodList.filter((food) => food.id !== id);
    setFoodList(updatedFoodList);
    localStorage.setItem("foodList", JSON.stringify(updatedFoodList));
  };

  return (
    <>
      <Sidebar setFoodList={setFoodList} />
      <div className={styles.foodContainer}>
        <div className={styles.foodCards}>
          {foodList.map((food) => (
            <div key={food.id} className={styles.foodCard}>
              <Link to={`/foodList/${food.id}`} className={styles.foodCardLink}>
                <img src={food.image} alt={food.name} className={styles.img} />
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
              <Link to={`/editFood/${food.id}`} className={styles.editButton}>
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
