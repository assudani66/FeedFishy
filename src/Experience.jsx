import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Kitty from './Kitty'
import { KittyFishAnimation } from './KittyFishAnimation';
import Kitty_static from './Kitty_static';
import * as THREE from "three"
import { Bloom, EffectComposer } from '@react-three/postprocessing';
extend({ OrbitControls })
const CameraLocation = {x: 0.0003941118749341708, y: 0.6759516532057666, z: 2.007868876840685}

export default function Experience()
{
    const { camera, gl } = useThree()

    // useFrame(state)(()=>{

    //     vec3.set(CameraLocation.x,CameraLocation.y,CameraLocation.z)
    //     state.camera.position.lerp(vec3)
    // }
    // )

    useFrame((state)=>{
        // console.log(state.camera.position)
        const vec = new THREE.Vector3()
        vec.set(CameraLocation.x,CameraLocation.y,CameraLocation.z)
        state.camera.position.lerp(vec,0.01)
        state.camera.lookAt(0,0.3,0)
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