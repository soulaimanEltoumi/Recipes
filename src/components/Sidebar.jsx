import React, { useState } from "react";
import data from "../assets/Data.json";
import classes from "./Sidebar.module.css";

function Sidebar({ setFoodList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxCalories, setMaxCalories] = useState(""); // Add a state for max calories
  const [filteredData, setFilteredData] = useState(data); // Add a state for filtered data

  function handleRestore() {
    localStorage.removeItem("foodList");
    localStorage.setItem("foodList", JSON.stringify(data));
    setFoodList(data);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMaxCaloriesChange = (e) => {
    setMaxCalories(e.target.value);
    // Filter data based on max calories
    const filteredData = data.filter(
      (item) => item.calories <= parseInt(e.target.value)
    );
    setFilteredData(filteredData);
    setFoodList(filteredData); // Update the foodList state with the filtered data
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isOpen ? "Hide Menu" : "Show Menu"}
      </button>
      {isOpen && (
        <div className={classes.Sidebar}>
          <h2>Menú</h2>
          <ul>
            <a href="#contact">Calories</a>
          </ul>
          <input
            type="number"
            value={maxCalories}
            onChange={handleMaxCaloriesChange}
            placeholder="Max Calories"
          />
          <button onClick={handleRestore}>Restore</button>
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>
                {item.name} - {item.calories} calories
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
