import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Sun from "./Sun";
import Background from "./Background";
import Planet from "./Planet";
import Astroid from "./Astroid";
import { useEffect, useState } from "react";

export const SolarSystem = () => {
    const mercury = [0.3504,11.58];
    const venus = [0.8691,21.64];
    const earth = [0.9149,29.92];
    const mars = [.4868, 45.58];
    const jupiter = [10.0398,155.72];
    const [astroids, setAstroids] = useState([]);

    useEffect(() => {
        let roids = [];
        for(let i=0; i<1000; i++){
            roids.push(i);
        }
        setAstroids(roids);
    },[]);

    return <Background>
        <Sun />
        <Planet 
            name="mercury"
            distance={mercury[1]*2}
            color={"brown"}
            size={mercury[0]}
        />
        <Planet
            name="venus"
            distance={venus[1]*2}
            color={"teal"}
            size={venus[0]}
        />
        <Planet
            name="earth"
            distance={earth[1]*2}
            color={"lightblue"}
            size={earth[0]}
        />
        <Planet
            name="mars"
            distance={mars[1]*2}
            color={"red"}
            size={mars[0]}
        />
        <Planet
            name="jupiter"
            distance={jupiter[1]*2}
            color={"white"}
            size={jupiter[0]}
        />
        {astroids.map(a => <Astroid key={a} />)}
    </Background>
}

export default SolarSystem;