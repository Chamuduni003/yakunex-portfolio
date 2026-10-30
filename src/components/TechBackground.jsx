import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.8}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.45}
        speed={2.5}
        roughness={0.1}
        wireframe
      />
    </Sphere>
  );
};

const TechBackground = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full opacity-40 pointer-events-none flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default TechBackground;