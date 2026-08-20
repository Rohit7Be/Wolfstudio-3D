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
            <div className="nav_elem">
              <i class="ri-arrow-right-s-line"></i>Show Reel
            </div>
            <div className="nav_elem">
              <i class="ri-menu-2-line"></i>
            </div>
          </nav>
          <div className="middle">
            <div className="left">
              <h1>
                WE <br /> MAKE <br /> GOOD <br /> SHIT
              </h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="bLeft"></div>
            <div className="bRight">
              <p>
                Dogstudio is a multidisciplinary creative studio <br/>at the
                intersection of art, design and technology.
                <br /> <br/>
                Our goal is to deliver amazing experiences that make people<br/>
                talk, and build strategic value for brands,<br/>tech, entertainment,
                arts & culture.
              </p>
            </div>
          </div>
        </section>
        <section id="section2"></section>
        <section id="section3"></section>
      </main>
    </>
  );
};

export default App;
