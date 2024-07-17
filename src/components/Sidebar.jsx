import React, { useState } from "react";
import data from "../assets/Data.json";
import classes from "./Sidebar.module.css"; // Ensure you have this CSS file

function Sidebar({ setFoodList }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleRestore() {
    localStorage.removeItem("foodList");
    localStorage.setItem("foodList", JSON.stringify(data));
    setFoodList(data);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
            <li>
              <a href="#contact">Calories</a>
            </li>
            <li>
              <button onClick={handleRestore}>Restore</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
