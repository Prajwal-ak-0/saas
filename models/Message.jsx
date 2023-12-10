import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import { useFrame } from "@react-three/fiber";

export function Message(props) {
  const { nodes, materials } = useGLTF("/3d/message.glb");

  const material2 = new MeshBasicMaterial({ color: 0xffffff });
  const material3 = new MeshBasicMaterial({ color: 0x000000 });

  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.05;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={material2} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={material3} />
      </group>
    </group>
  );
}
