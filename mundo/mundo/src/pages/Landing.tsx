import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          margin: 0,
          textAlign: "center",
        }}
      >
        Tim and Adam's Mundo Fantastico
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 200px)",
          gap: "1rem",
        }}
      >
        <button onClick={() => navigate("create")}>Create</button>
        <button onClick={() => navigate("timeline")}>Timeline</button>
        <button onClick={() => navigate("mindmap")}>Mind Map</button>
        <button onClick={() => navigate("storylines")}>Storylines</button> 
        <button onClick={() => navigate("worldmap")}>World Map</button>
      </div>
    </div>
  );
    //hyperlinks in wiki pages for objects 
};

export default Landing;
