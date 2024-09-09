import React, { useState, useEffect } from "react";
import './app.css'

const BackgroundChanger = () => {

  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Background Color Changer</h1>
      <button onClick={() => setColor(getRandomColor())}>
        Change Background Color
      </button>
    </div>
  );
};

export default BackgroundChanger;
