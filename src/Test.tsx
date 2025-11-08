import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import "./M.css";

function Box() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={5} />
      <axesHelper args={[5]} />
      <OrbitControls />
      <Box />
    </Canvas>
  );
}

function M() {
  return (
    <div style={{ height: "100vh", }}>
      <ThreeScene />
    </div>
  );
}

export default M;