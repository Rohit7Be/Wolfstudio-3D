import React from "react";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <div className="images">
          <img src="/tommorowland.png" alt="Tomorrowland project" />
          <img src="/navy-pier.png" alt="Navy Pier" />
          <img src="/msi-chicago.png" alt="MSI Chicago" />
          <img src="/phone.png" alt="This Was Louise's Phone project" />
          <img src="/kikk.png" alt="KIKK Festival 2018 project" />
          <img src="/kennedy.png" alt="The Kennedy Center project" />
          <img src="/opera.png" alt="Royal Opera of Wallonia project" />
          
        </div>
        <Canvas id="canvas_elem"
          camera={{ position: [0, 0, 1.1], fov: 45 }}
          gl={{
            toneMapping: THREE.ReinhardToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            
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
                Wolfstudio is a multidisciplinary creative studio <br/>at the
                intersection of art, design and technology.
                <br /> <br/>
                Our goal is to deliver amazing experiences that make people<br/>
                talk, and build strategic value for brands,<br/>tech, entertainment,
                arts & culture.
              </p>
            </div>
          </div>
          <div className="firstLine"></div>
          <div className="secondLine"></div>
        </section>
        <section id="section2">
          <div className="titles">
            <div className="title">
              <small>2020-Ongoing</small>
              <h1>TommorrowLand</h1>
            </div>
            <div className="title">
              <small>2020-Ongoing</small>
              <h1>Navy Pier</h1>
            </div>
            <div className="title">
              <small>2020-Ongoing</small>
              <h1>MSI Chicago</h1>
            </div>
            <div className="title">
              <small>2020-Ongoing</small>
              <h1>This was Louise's phone</h1>
            </div>
            <div className="title">
              <small>2020-Ongoing</small>
              <h1>KIKK Festival 2018</h1>
            </div>
            <div className="title">
              <small>2020-Ongoing</small>
              <h1>The Kennedy Center</h1>
            </div>
            <div className="title">
              <small>2020-Ongoing</small>
              <h1>Royal Opera of Wallonia</h1>
            </div>
          </div>
        </section>
        <section id="section3"></section>
      </main>
    </>
  );
};

export default App;
