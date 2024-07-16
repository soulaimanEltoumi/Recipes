import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/ NotFoundPage/index.jsx";
import RecipeDetail from "./pages/RecipeDetails";
import FoodList from "./pages/FoodList/index.jsx";
import EditRecipes from "./pages/EditRecipes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FoodList" element={<FoodList />} />
        <Route path="/foodList/:id" element={<RecipeDetail />} />
        <Route path="/editFood/:id" element={<EditRecipes />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
