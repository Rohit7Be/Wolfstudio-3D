import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Dog = () => {
  gsap.registerPlugin(ScrollTrigger);

  const model = useGLTF("/models/dog.drc.glb");

  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const [normalMap, sampleMap] = useTexture([
    "/dog_normals.jpg",
    "/matcap/mat-2.png",
  ]).map((t) => {
    t.flipY = false;
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  });

  const [branchesDiffuse, branchesNormals] = useTexture([
    "/branches_diffuse.jpeg",
    "/branches_normals.jpeg",
  ]).map((t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  });

  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    map: branchesDiffuse,
    normalMap: branchesNormals,
  });

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else {
      child.material = branchMaterial;
    }
  });

  const dogModel = useRef(model);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
        endTrigger: "#section3",
      },
    });

    tl
    .to(dogModel.current.scene.position, {
      z: "-=1",
      y: "+=0.1",
    })
    .to(dogModel.current.scene.rotation, {
      x: `+=${Math.PI / 15}`,
    })
    .to(dogModel.current.scene.rotation, {
      y: `-=${Math.PI}`,
      
    }, "third")
    .to(dogModel.current.scene.position, {
      z: "+=0.9",
      y: "-=0.1",
      x: "-=0.5",
    }, "third");
  }, []);

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.2, -0.65, 0]}
        scale={[1.2, 1.2, 1.2]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default Dog;
