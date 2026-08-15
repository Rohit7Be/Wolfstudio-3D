import React from "react";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";
import "./App.css";
const App = () => {
  return (
    <>
      <main>
        <Canvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/background_canvas.png')",
            backgroundSize: "cover",
          }}
        >
          <Dog />
        </Canvas>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
};

export default App;
