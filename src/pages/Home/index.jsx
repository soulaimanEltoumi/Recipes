// Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import Carousel from "../../components/Carousel";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/FoodList");
  };

  return (
    <div>
      <h1>Welcome to the home page</h1>
      <Carousel />
      <div className={classes.div}>
        <button className={classes.button} onClick={handleButtonClick}>
          {" "}
          all Recipes{" "}
        </button>
      </div>
      {/* <div className={classes.div}>
        <button className={classes.button} onClick={handleButtonClick}>
          {" "}
          About{" "}
        </button>
      </div> */}
    </div>
  );
}
