import React from "react";
import data from "../assets/Data.json";

function Sidebar({ setFoodList }) {
  function handleRestore() {
    localStorage.removeItem("foodList");
    localStorage.setItem("foodList", JSON.stringify(data));
    setFoodList(data);
  }
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li>
          <a href="#home">Main dishes</a>
        </li>
        <li>
          <a href="#services">Desserts</a>
        </li>
        <li>
          <a href="#about">Favorite food dishes</a>
        </li>
        <li>
          <a href="#contact">Calories</a>
        </li>
        <li>
          <button onClick={handleRestore}> restore </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
