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
        <section id="section1">
          <nav>
            <div className="nav_elem">Wolf Studio</div>
            <div>Show Reel</div>
            <div></div>
          </nav>
        </section>
        <section id="section2"></section>
        <section id="section3"></section>
      </main>
    </>
  );
};

export default App;
