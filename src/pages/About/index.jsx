// About.jsx

import React from "react";
import Sidebar from "../../components/Sidebar";
import aboutContent from "./AboutContent"; // Importa el contenido desde el archivo separado
import "./About.css"; // Importa el archivo CSS para estilos

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="about-content">
          <h1>{aboutContent.title}</h1>
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
}
