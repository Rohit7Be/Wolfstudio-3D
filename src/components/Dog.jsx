import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { MatcapTexture, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useAnimations } from '@react-three/drei'


const Dog = () => {
  const model = useGLTF('/models/dog.drc.glb')
  const { camera, gl } = useThree()

  useEffect(() => {

    camera.position.z = 0.7
    camera.lookAt(0, 0, 0)
    gl.toneMapping = THREE.ReinhardToneMapping
    gl.outputColorSpace = THREE.SRGBColorSpace


  }, [camera, gl])

  const { actions } = useAnimations(model.animations, model.scene)

  useEffect(() => {

    actions["Take 001"].play();


  }, [actions])

  const [normalMap, sampleMap, ] = useTexture(['/dog_normals.jpg', '/matcap/mat-2.png']).map((t) => {
    t.flipY = false
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })

  const [branchesDiffuse, branchesNormals] = useTexture([ "/branches_diffuse.jpeg", "/branches_normals.jpeg"]).map((t) => {
    
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })

  

  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMap

  })

  const branchMaterial = new THREE.MeshMatcapMaterial({
    map: branchesDiffuse,
    normalMap: branchesNormals
  })

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial
    }else{
      child.material = branchMaterial
    }
  })

  return (
    <>
      <primitive object={model.scene} position={[0.2, -0.65, 0]} scale={[1.2, 1.2, 1.2]} rotation={[0, Math.PI / 4, 0]} />
      <directionalLight position={[0, 5, 5]} color={0xFFFFFF} intensity={10} />
      <OrbitControls enableZoom={false} />
    </>





  )
}

export default Dog
