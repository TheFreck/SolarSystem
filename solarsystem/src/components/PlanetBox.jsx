import { useEffect, useState, useRef, useCallback } from "react";
import Background from "./Background";
import planetContent from "../content/planetContent";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import mercuryIm from "../assets/mercury.png";
import venusIm from "../assets/venus.jpg";
import earthIm from "../assets/earth.jpg";
import marsIm from "../assets/mars.png";
import jupiterIm from "../assets/jupiter.jpg";
import lunaIm from "../assets/luna.jpg";
import Planet from "./Planet";
import Sun from "./Sun";

export const PlanetBox = (props) => {
    const {
        planet,
        viewEnum,
        baseRef
     } = props;

    const boxRef = useRef();
    const sunHubRef = useRef();
    const sunRef = useRef();

    const [targetBody,setTargetBody] = useState({});
    const [ready,setReady] = useState(false);

    const maps = {
        mercury: useLoader(THREE.TextureLoader,[mercuryIm]),
        venus: useLoader(THREE.TextureLoader,[venusIm]),
        earth: useLoader(THREE.TextureLoader,[earthIm]),
        luna: useLoader(THREE.TextureLoader,[lunaIm]),
        mars: useLoader(THREE.TextureLoader,[marsIm]),
        jupiter: useLoader(THREE.TextureLoader,[jupiterIm])
    }

    useEffect(() => {
        console.log("planet: ", planet);
        console.log("enum: ", viewEnum);
        if(!planet || !viewEnum.mercury) return;
        console.log("view: ", viewEnum);
        console.log(planet);
        console.log(Object.keys(viewEnum)[planet]);
        let target = planetContent.find(p => p.name === Object.keys(viewEnum)[planet]);
        sunHubRef.current.position.x = 0
        boxRef.current.rotation.z = -.4;
        setTargetBody(target);
    },[]);

    useEffect(() => {
        if(targetBody.name && sunRef.current) setReady(true);
        else setReady(false);
    },[targetBody]);
    
    useFrame((frame) => {
        sunHubRef.current.rotation.y += (targetBody.rotSpeed/1000)*baseRef.movement;
    });

    const PlanetBoxCallback = useCallback(() => <mesh
        ref={boxRef}
        name="planetBox"
        receiveShadow
        castShadow
        position={[0, 0, 0]}
        rotation={[0,0,((90-targetBody.tilt)/360)*2*Math.PI]}
    >
        <ambientLight intensity={.1} />
        <boxGeometry
            args={[1000, 1000, 1000]}

        />
        <meshPhongMaterial
            color="black"
            side={THREE.DoubleSide}

        />
        { ready &&
            <Planet
                key={targetBody.name}
                planetName={targetBody.name}
                baseRef={baseRef}
                size={targetBody.size}
                distance={0}
                revolutionSpeed={0}
                rotationSpeed={0}
                tilt={targetBody.tilt}
                color={targetBody.color}
                map={Object.keys(maps).includes(targetBody.name) ? maps[targetBody.name][0] : null}
            >
                {targetBody.satellites && targetBody.satellites.map(s => 
                    <Planet
                        key={s.name}
                        planetName={s.name}
                        baseRef={baseRef}
                        size={s.size*baseRef.size}
                        distance={s.distance*baseRef.size}
                        revolutionSpeed={(targetBody.rotSpeed/1000+s.revSpeed/1000)*baseRef.movement}
                        tilt={s.tilt}
                        color={s.color}
                        map={Object.keys(maps).includes(s.name) ? maps[s.name][0] : null}
                        rotationSpeed={s.rotSpeed}
                    />
                )}
            </Planet>
        }
        <mesh
            ref={sunHubRef}
        >
            <mesh
                ref={sunRef}
                position={[0,0,-targetBody.distance * baseRef.distance]}
            >
                <Sun 
                    key="sol"
                    size={5}
                    intensity={targetBody.distance*1000*baseRef.distance}
                />
            </mesh>
        </mesh>
    </mesh>,[planet,ready]);

    return <PlanetBoxCallback />;
}

export default PlanetBox;