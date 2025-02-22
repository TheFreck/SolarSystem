import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Sun from "./Sun";
import Background from "./Background";
import Planet from "./Planet";
import Astroid from "./Astroid";
import { useCallback, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import jupiterIm from "../assets/jupiter.jpg";
import earthIm from "../assets/earth.jpg";
import sunIm from "../assets/sun.jpg";

export const SolarSystem = () => {
    const sun = [0,10];
    const mercury = [0.3504,11.58,.0298];
    const venus = [0.8691,21.64,.0217];
    const earth = [0.9149,29.92,.0185];
    const mars = [.4868, 45.58,.015];
    const jupiter = [10.0398,155.72,.0081];
    const [astroids, setAstroids] = useState([]);
    const [ready, setReady] = useState(false);
    const [jupiterMap] = useLoader(THREE.TextureLoader,[jupiterIm]);
    const [earthMap] = useLoader(THREE.TextureLoader,[earthIm]);
    const [sunMap] = useLoader(THREE.TextureLoader,[sunIm]);

    useEffect(() => {
        let roids = [];
        for(let i=0; i<1000; i++){
            roids.push({
                size: Math.random()*.2+.2,
                distance: ((2*Math.random()+2*Math.random())-4)*25 + 200,
                spin: Math.random()/50
            });
        }
        setAstroids(roids);
        setReady(true);
    },[]);

    const SolarSystemCallback = useCallback(() => <Background>
        <Sun
            name="sol"
            size={sun[1]}
            map={sunMap}
        />
        <Planet 
            name="mercury"
            distance={mercury[1]*2}
            color={"brown"}
            size={mercury[0]}
            revolutionSpeed={mercury[2]/2}
        />
        <Planet
            name="venus"
            distance={venus[1]*2}
            color={"teal"}
            size={venus[0]}
            revolutionSpeed={venus[2]/2}
        />
        <Planet
            name="earth"
            distance={earth[1]*2}
            color={"lightblue"}
            size={earth[0]}
            tilt={23}
            revolutionSpeed={earth[2]/2}
            map={earthMap}
        >
            <Planet 
                name="luna"
                distance={earth[1]*.1}
                color="gray"
                size={earth[0]*.2}
                tilt={0}
                revolutionSpeed={.11}
            />
        </Planet>
        <Planet
            name="mars"
            distance={mars[1]*2}
            color={"red"}
            size={mars[0]}
            revolutionSpeed={mars[2]/2}
        />
        <Planet
            name="jupiter"
            distance={jupiter[1]*2}
            size={jupiter[0]}
            revolutionSpeed={jupiter[2]}
            map={jupiterMap}
        />
        {astroids.map((a,i) => <Astroid key={i} group={"belt"} size={a.size} distance={a.distance} spin={a.spin} />)}
    </Background>
    ,[ready]);

    return <SolarSystemCallback />
}

export default SolarSystem;