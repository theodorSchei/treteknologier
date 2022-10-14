import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { applyProps, Canvas, MeshProps, useFrame } from '@react-three/fiber';
import {
  AccumulativeShadows,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  PresentationControls,
  RandomizedLight,
  SpotLight,
  useDepthBuffer,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';

const WireT = (props: any) => {
  const { nodes, materials } = useGLTF('/wireframe_t.gltf') as any;

  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // Add the little bouncing around

    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    mesh.current.rotation.y = Math.sin(t / 4) / 8;
    mesh.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10;

    //mesh.current.rotation.x += 0.005;
    //mesh.current.rotation.y += 0.005;
  });

  useLayoutEffect(() => {
    mesh.current.geometry.computeBoundingBox();
    const boundingBox = mesh.current.geometry.boundingBox;
    const center = new THREE.Vector3();
    if (boundingBox !== null) boundingBox.getCenter(center);
    mesh.current.geometry.translate(-center.x, -center.y, -center.z);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
};
useGLTF.preload('/wireframe_t.gltf');

export const Wireframe = () => {
  //const depthBuffer = useDepthBuffer({ size: number('size', 256) });

  const lightHeight = 5;
  const ligthDistance = 10;
  const lightPenumbra = 0.6;
  const lightIntensity = 3;
  const lightAngle = 0.3;
  const lightDecay = 0;
  const ligthDepth = 10;
  return (
    <Canvas>
      {/* Left */}
      <directionalLight
        castShadow
        intensity={lightIntensity}
        color="#c084fc"
        position={[-ligthDistance, lightHeight, ligthDepth]}
      />
      <directionalLight
        castShadow
        intensity={lightIntensity}
        color="#c084fc"
        position={[-ligthDistance, -lightHeight, -ligthDepth]}
      />

      {/* Right */}
      <ambientLight />
      <directionalLight
        castShadow
        intensity={lightIntensity}
        color="#db2777"
        position={[ligthDistance, lightHeight, ligthDepth]}
      />

      <PresentationControls
        global={true} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[-Infinity, Infinity]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      >
        <WireT rotation={[0, 0, 0]} scale={0.12} />
        <rectAreaLight
          castShadow
          intensity={100}
          color="#c084fc"
          width={10}
          height={10}
          position={[-ligthDistance, lightHeight, ligthDistance]}
          //lookAt={new THREE.Vector3(0,0,0)}
        />
      </PresentationControls>
      {/* <OrbitControls autoRotate={true} enableZoom={false} /> */}
    </Canvas>
  );
};
