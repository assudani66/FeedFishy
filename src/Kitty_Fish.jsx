import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { act, useFrame, useThree } from "@react-three/fiber";


export function Kitty_Fish(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./just_a_hungry_fish.glb");
  const { actions } = useAnimations(animations, group);
  const [currentTime,setCurrentTime]=useState(0)
  const [feed,setFeed] = useState(false)
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useFrame((state, delta) => {
    if (running) {
      setTime(time + delta);
    }
  });

  useEffect(() => {

    running && actions.feed_fish.play()
    !running && actions.feed_fish.stop()

    if (time >= 0.83) {
      setRunning(false);
      setTime(0);
    }
  }, [time]);

  const start = () => {
    setTime(0);
    setRunning(true);
    
  };

  const reset = () => {

    setRunning(false);
  };

  return (

    <group ref={group} {...props} dispose={null} >
      <group name="Scene" onClick={()=>{start()}}>
        <group
          name="fish"
          position={[0.09, 0.02, 0.17]}
          rotation={[0, 0.02, 0.2]}
          scale={0.03}
        >
          <mesh
            name="Fish_M_Fish_Eye_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Fish_M_Fish_Eye_Black_0.geometry}
            material={materials.M_Fish_Eye_Black}
          />
          <mesh
            name="Fish_M_Fish_Eye_Black_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Fish_M_Fish_Eye_Black_0_1.geometry}
            material={materials.M_Fish_Details}
          />
          <mesh
            name="Fish_M_Fish_Eye_Black_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Fish_M_Fish_Eye_Black_0_2.geometry}
            material={materials.M_Fish_Tail}
          />
          <mesh
            name="Fish_M_Fish_Eye_Black_0_3"
            castShadow
            receiveShadow
            geometry={nodes.Fish_M_Fish_Eye_Black_0_3.geometry}
            material={materials.M_Fish_Body}
          />
          <mesh
            name="Fish_M_Fish_Eye_Black_0_4"
            castShadow
            receiveShadow
            geometry={nodes.Fish_M_Fish_Eye_Black_0_4.geometry}
            material={materials.M_Fish_Eye}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./just_a_hungry_fish.glb");


export function HelloKitty_mouth(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./HelloKitty_mouth.glb");
  const { actions } = useAnimations(animations, group);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cat_Body_M_Cat_Body_0001"
          castShadow
          receiveShadow
          geometry={nodes.Cat_Body_M_Cat_Body_0001.geometry}
          material={materials["Material.002"]}
          position={[0, 0.35, 0.26]}
          scale={0.02}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./HelloKitty_mouth.glb")