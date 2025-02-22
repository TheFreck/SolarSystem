import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import './App.css'
import SolarSystem from './components/solarsystem';
import { FlyControls, OrbitControls } from '@react-three/drei'
import * as THREE from "three";
import Sun from './components/Sun';
import Planet from './components/Planet';
import Background from './components/Background';
import { Button } from '@mui/material';

const controlsEnum = {
  orbit: false,
  fly: true
}

function App() {
  const [aspectWidth, setAspectWidth] = useState(200);
  const [aspectHeight, setAspectHeight] = useState(100);
  const [cameraNear, setCameraNear] = useState(1);
  const [cameraFar, setCameraFar] = useState(1000);
  const [controls, setControls] = useState(false);

  return (
    <div id="canvas-container">

      <Button
        style={{position: "absolute", border: "solid", color: "yellow", top: 0, left: 0, zIndex: 100}}
        onClick={() => setControls(!controls)}
      >{controls === controlsEnum.orbit ? "Orbit" : "Fly"}</Button>
      <Canvas
        camera={{position:[0,0,150], aspect: aspectWidth/aspectHeight, cameraNear, cameraFar}}
        style={{height: "100vh", width: "100vw", margin: 0, padding: 0, background: "black"}}
        shadows
      >
        {controls === controlsEnum.fly && <FlyControls 
          movementSpeed={25}
          rollSpeed={Math.PI/10}
          autoForward={false}
          dragToLook={true}
        />}
        {controls === controlsEnum.orbit && <OrbitControls />}
        <SolarSystem />
        {/* <gridHelper scale={10} /> */}
      </Canvas>
    </div>
  )
}

export default App
