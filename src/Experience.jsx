import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Kitty from './Kitty'
import { KittyFishAnimation } from './KittyFishAnimation';
import Kitty_static from './Kitty_static';
import * as THREE from "three"
import { FeedContextProvider } from './feedContext';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
extend({ OrbitControls })
const CameraLocation ={x : 0.015513230647789917, y : 1.0692114647034479,z : 2.57697802146518}

export default function Experience()
{
    const { camera, gl } = useThree()

    // useFrame(state)(()=>{

    //     vec3.set(CameraLocation.x,CameraLocation.y,CameraLocation.z)
    //     state.camera.position.lerp(vec3)
    // }
    // )

    useFrame((state)=>{
        const vec = new THREE.Vector3()
        vec.set(CameraLocation.x,CameraLocation.y,CameraLocation.z)
        // state.camera.position.lerp(vec,0.03)
        state.camera.lookAt(0,0,0)
    })
    
    return <>
               
            <orbitControls args={ [ camera, gl.domElement ] } />
            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 0.75 } />
            <ambientLight intensity={ 0.3 } />
            <Kitty/>
            <Kitty_static/>
            <KittyFishAnimation/>
            <EffectComposer smaa>
            <Bloom intensity={10}/>
            </EffectComposer>
   </>
}