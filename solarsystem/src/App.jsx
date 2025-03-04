import { useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import './App.css'
import SolarSystem from './components/SolarSystem';
import { FlyControls, OrbitControls } from '@react-three/drei'
import * as THREE from "three";
import Sun from './components/Sun';
import Planet from './components/Planet';
import Background from './components/Background';
import { Button, Slider } from '@mui/material';
import PlanetBox from './components/PlanetBox';

const controlsEnum = {
  orbit: false,
  fly: true
}

const viewEnum = {
  sun: 0,
  mercury: 1,
  venus: 2,
  earth: 3,
  luna: 4,
  mars: 5,
  jupiter: 6
}

function App() {
  const [aspectWidth, setAspectWidth] = useState(200);
  const [aspectHeight, setAspectHeight] = useState(100);
  const [near, setNear] = useState(1);
  const [far, setFar] = useState(10000);
  const [position,setPosition ] = useState([0,0,20]);
  const [controls, setControls] = useState(false);
  const [cameraAngle, setCameraAngle] = useState(false);
  const [cameraView, setCameraView] = useState(viewEnum.sun);
  const [fov, setFov] = useState(45);
  const [baseMovement,setBaseMovement] = useState(55);
  const [baseDistance,setBaseDistance] = useState(1);
  const [baseSize,setBaseSize] = useState(1);
  const [ready,setReady] = useState(false);

  const baseRef = useRef();


  useEffect(() => {
    baseRef.current = {
      movement: (baseMovement-50)/50,
      distance: 1,
      size: 1
    };
    setReady(true);
  },[]);

  const changeSpeed = (e) => {
    console.log(e.target.value);
    setBaseMovement(e.target.value);
    baseRef.current.movement = (e.target.value-50)/50;
  }

  useEffect(() => {
    // console.log("view: ", cameraView);
  },[cameraView]);

  const ButtonPanel = () => <div
    style={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
  >
    <Slider
      aria-label="Speed"
      value={baseMovement}
      onChange={changeSpeed}
    />
    <Button
      style={{
        border: "solid",
        color: "yellow"
      }}
      onClick={() => setCameraView(viewEnum.sun)}
    >
      Sun
    </Button>
    <Button
      style={{
        border: "solid",
        color: "brown"
      }}
      onClick={() => setCameraView(viewEnum.mercury)}
    >
      Mercury
    </Button>
    <Button
      style={{
        border: "solid",
        color: "teal"
      }}
      onClick={() => setCameraView(viewEnum.venus)}
    >
      Venus
    </Button>
    <Button
      style={{
        border: "solid",
        color: "blue"
      }}
      onClick={() => setCameraView(viewEnum.earth)}
    >
      Earth
    </Button>
    <Button
      style={{
        border: "solid",
        color: "red"
      }}
      onClick={() => setCameraView(viewEnum.mars)}
    >
      Mars
    </Button>
    <Button
      style={{
        border: "solid",
        color: "orange"
      }}
      onClick={() => setCameraView(viewEnum.jupiter)}
    >
      Jupiter
    </Button>
  </div>

  const PlanetBoxCallback = useCallback(() => <PlanetBox
    planet={cameraView}
    viewEnum={viewEnum}
    baseRef={baseRef.current}
  />,[cameraView]);

  return (
    <div id="canvas-container">
      <ButtonPanel />
      <Canvas
        camera={{fov,near,far,position}}
        style={{ height: "100vh", width: "100vw", margin: 0, padding: 0, background: "black" }}
        shadows
      >
        <ambientLight intensity={.2} />
        {
          controls === controlsEnum.fly &&
          <FlyControls
            movementSpeed={25}
            rollSpeed={Math.PI / 10}
            autoForward={false}
            dragToLook={true}
          />
        }
        {controls === controlsEnum.orbit && <OrbitControls />}
        {
          ready && baseRef && cameraView === viewEnum.sun &&
          <SolarSystem 
            baseRef={baseRef.current}
          />
        }
        {
          ready && baseRef && cameraView && cameraView !== viewEnum.sun &&
          <PlanetBoxCallback />
        }
      </Canvas>
    </div>);
}

export default App;