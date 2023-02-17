import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'
import { Button, Logo } from './UIcomponents'
import { FeedContextProvider } from './feedContext'

const CameraLocation = { x: 0.000513230647789917, y: 1.0692114647034479, z: 2.57697802146518 }
export default function App() {
    return (
        <div className='gridContainer' >
            <FeedContextProvider>
                <Logo name="Feed Fishy" />
                <div style={{ border: "solid" }}>
                    <Canvas
                        gl={{
                            antialias: true,
                            toneMapping: THREE.ACESFilmicToneMapping,
                            outputEncoding: THREE.sRGBEncoding
                        }}
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [CameraLocation.x, CameraLocation.y, CameraLocation.z]
                        }}
                    >
                        <Experience />
                    </Canvas>
                </div>
                <Button name="Feed me" />
            </FeedContextProvider>
        </div>
    )
}