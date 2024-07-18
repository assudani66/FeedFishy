import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import * as THREE from 'three';
import { Button, EndScreen, FishGauge, Logo, ScoreDisplay, Tutorial } from './UIcomponents';
import { FeedContextProvider, FishElementProvider, FishPositionProvider, InitialFishPositionProvider, ScoreContextProvider, WidthContextProvider } from './feedContext';
import { useEffect } from 'react';

const CameraLocation = {x: 0.0003941118749341708, y: 0.6759516532057666, z: 2.007868876840685};

function App() {
    useEffect(() => {
        document.title = "Feed Fishy - The Ultimate Fish Feeding Game";
    }, []);

    return (
        <div className='gridContainer'>
            <ScoreContextProvider>
                <WidthContextProvider>
                    <FishPositionProvider>
                        <FeedContextProvider>
                            <FishElementProvider>
                                <InitialFishPositionProvider>
                                    <Tutorial />
                                    <EndScreen />
                                    <Logo name="Feed Fishy" />
                                    <div className="ThreeCanvas">
                                        <ScoreDisplay />
                                        <Canvas
                                            gl={{
                                                antialias: true,
                                                toneMapping: THREE.ACESFilmicToneMapping,
                                                outputEncoding: THREE.sRGBEncoding
                                            }}
                                            camera={{
                                                fov: 35,
                                                near: 0.1,
                                                far: 200,
                                                position: [CameraLocation.x, CameraLocation.y, CameraLocation.z]
                                            }}>
                                            <Experience />
                                        </Canvas>
                                    </div>
                                    <FishGauge />
                                    <Button name="Feed me" />
                                </InitialFishPositionProvider>
                            </FishElementProvider>
                        </FeedContextProvider>
                    </FishPositionProvider>
                </WidthContextProvider>
            </ScoreContextProvider>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
