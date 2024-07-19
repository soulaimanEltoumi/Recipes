// About.jsx

import React from "react";
import Sidebar from "../../components/Sidebar";
import aboutContent from "./AboutContent";
import "./About.css";

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
