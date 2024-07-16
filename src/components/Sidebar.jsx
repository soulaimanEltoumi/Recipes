import React from "react";

function Sidebar() {
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
      </ul>
    </div>
  );
}

export default Sidebar;
