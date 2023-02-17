

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Kitty_Fish(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/just_a_hungry_cat.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    const animations_names = Object.keys(actions)
   for(var i=0;i<animations_names.length;i++){
    var current_animation_name = animations_names[i]
    actions[current_animation_name].play()
    // console.log(animations_names[i])
  }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cat_Mustache_1_M_Cat_Body_0"
          castShadow
          receiveShadow
          geometry={nodes.Cat_Mustache_1_M_Cat_Body_0.geometry}
          material={materials.M_Cat_Body}
          position={[0.19, 0.41, 0.12]}
          scale={0.04}
        />
        <group
          name="Cat_Eye_R_M_Cat_Black_0"
          position={[-0.1, 0.52, 0.19]}
          scale={0.04}
        >
          <mesh
            name="Cat_Eye_R_M_Cat_Black_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Cat_Eye_R_M_Cat_Black_0_1.geometry}
            material={materials.M_Cat_Black}
          />
          <mesh
            name="Cat_Eye_R_M_Cat_Black_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Cat_Eye_R_M_Cat_Black_0_2.geometry}
            material={materials.M_Cat_Yellow}
          />
        </group>
        <mesh
          name="Cat_Mustache_2_M_Cat_Body_0"
          castShadow
          receiveShadow
          geometry={nodes.Cat_Mustache_2_M_Cat_Body_0.geometry}
          material={materials.M_Cat_Body}
          position={[-0.19, 0.41, 0.12]}
          scale={0.04}
        />
        <mesh
          name="Cat_Tail_M_Cat_Body_0"
          castShadow
          receiveShadow
          geometry={nodes.Cat_Tail_M_Cat_Body_0.geometry}
          material={materials.M_Cat_Body}
          position={[0.14, 0.05, -0.15]}
          rotation={[0, 0.03, -0.01]}
          scale={0.04}
        />
        <group name="Cat_Body_M_Cat_Body_0" scale={0.04}>
          <mesh
            name="Cat_Body_M_Cat_Body_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Cat_Body_M_Cat_Body_0_1.geometry}
            material={materials.M_Cat_Body}
          />
          <mesh
            name="Cat_Body_M_Cat_Body_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Cat_Body_M_Cat_Body_0_2.geometry}
            material={materials.M_Cat_Pink}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/just_a_hungry_cat.glb");


