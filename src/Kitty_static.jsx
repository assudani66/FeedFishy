/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Kitty_static(props) {
  const { nodes, materials } = useGLTF("./just_a_hungry_staticBackground.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Bowl_M_Bowl_PinkishRed_0"
          position={[-0.01, 0.04, 0.53]}
          scale={[0.1, 0.04, 0.1]}
        >
          <mesh
            name="Bowl_M_Bowl_PinkishRed_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Bowl_M_Bowl_PinkishRed_0_1.geometry}
            material={materials.M_Bowl_PinkishRed}
          />
          <mesh
            name="Bowl_M_Bowl_PinkishRed_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Bowl_M_Bowl_PinkishRed_0_2.geometry}
            material={materials.M_Floor}
          />
          <mesh
            name="Bowl_M_Bowl_PinkishRed_0_3"
            castShadow
            receiveShadow
            geometry={nodes.Bowl_M_Bowl_PinkishRed_0_3.geometry}
            material={materials.M_BackGround}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./just_a_hungry_staticBackground.glb");
