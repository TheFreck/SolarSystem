import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import './App.css'
import SolarSystem from './components/solarsystem';
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three";
import Sun from './components/Sun';
import Planet from './components/Planet';
import Background from './components/Background';

function App() {
  const [fov, setFov] = useState(0);
  const [aspectWidth, setAspectWidth] = useState(200);
  const [aspectHeight, setAspectHeight] = useState(100);
  const [cameraNear, setCameraNear] = useState(1);
  const [cameraFar, setCameraFar] = useState(1000);

  return (
    <div id="canvas-container">
      <Canvas
        camera={{position:[0,50,200], aspect: aspectWidth/aspectHeight, cameraNear, cameraFar}}
        style={{height: "100vh", width: "100vw", margin: 0, padding: 0}}
        shadows
      >
        <OrbitControls />
        <SolarSystem />
        
      </Canvas>
    </div>
  )
}

export default App
