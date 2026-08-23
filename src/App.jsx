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
          <img id="tommorowland" src="/tommorowland.png" alt="Tomorrowland project" />
          <img id="navy-pier" src="/navy-pier.png" alt="Navy Pier" />
          <img id="msi-chicago" src="/msi-chicago.png" alt="MSI Chicago" />
          <img id="phone" src="/phone.png" alt="This Was Louise's Phone project" />
          <img id="kikk" src="/kikk.png" alt="KIKK Festival 2018 project" />
          <img id="kennedy" src="/kennedy.png" alt="The Kennedy Center project" />
          <img id="opera" src="/opera.png" alt="Royal Opera of Wallonia project" />
          
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
            <div img-title="tommorowland" className="title">
              <small>2020-Ongoing</small>
              <h1>TommorrowLand</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <small>2020-Ongoing</small>
              <h1>Navy Pier</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <small>2020-Ongoing</small>
              <h1>MSI Chicago</h1>
            </div>
            <div img-title="phone" className="title">
              <small>2020-Ongoing</small>
              <h1>This was Louise's phone</h1>
            </div>
            <div img-title="kikk" className="title">
              <small>2020-Ongoing</small>
              <h1>KIKK Festival 2018</h1>
            </div>
            <div img-title="kennedy" className="title">
              <small>2020-Ongoing</small>
              <h1>The Kennedy Center</h1>
            </div>
            <div img-title="opera" className="title">
              <small>2020-Ongoing</small>
              <h1>Royal Opera of Wallonia</h1>
            </div>
          </div>
        </section>
        <section id="section3">
          <div className="top">
            <div className="topLeft">
              <h1>Wolfstudio is a multidisciplinary <br/>creative studio at the <br/>
                intersection of technology.
                <br /> 
                </h1>
            </div>
            <div className="topRight">
              
            </div>
          </div>
          <div className="bottom">
              <div className="bottomLeft"></div>
              <div className="bottomRight">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque libero nobis laborum iusto repudiandae, quia ipsum sint amet sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odit dolore dicta recusandae cupiditate debitis, a eius repellat repellendus nobis iure iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis animi quae, rem veritatis ullam alias soluta quaerat velit quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a recusandae consectetur ipsam possimus neque delectus natus asperiores in architecto. Nobis, itaque!</p>
              </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
