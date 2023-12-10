import React from "react";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

export function Message(props) {
  const { nodes, materials } = useGLTF("/3d/message.glb");

  // Change color for each material
  const material1 = new MeshBasicMaterial({ color: 0xDB3ED5 }); // Red color
  const material2 = new MeshBasicMaterial({ color: 0xffffff }); // White color
  const material3 = new MeshBasicMaterial({ color: 0x000000 }); // Black color

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={material1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={material2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={material3}
        />
      </group>
    </group>
  );
}
