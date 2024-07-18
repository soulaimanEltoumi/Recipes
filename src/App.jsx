import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/ NotFoundPage/index.jsx";
import RecipeDetail from "./pages/RecipeDetails";
import RecipesList from "./pages/FoodList/index.jsx";
import EditRecipes from "./pages/EditRecipes";
import CreateRecipe from "./pages/CreateRecipe/";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FoodList" element={<RecipesList />} />
        <Route path="/foodList/:id" element={<RecipeDetail />} />
        <Route path="/editFood/:id" element={<EditRecipes />} />
        <Route exact path="/createRecipe" element={<CreateRecipe />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
