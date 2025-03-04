import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Sun from "./Sun";
import Background from "./Background";
import Planet from "./Planet";
import Astroid from "./Astroid";
import { useCallback, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import mercuryIm from "../assets/mercury.png";
import jupiterIm from "../assets/jupiter.jpg";
import earthIm from "../assets/earth.jpg";
import lunaIm from "../assets/luna.jpg";
import sunIm from "../assets/sun.jpg";
import planets from "../content/planetContent";

export const SolarSystem = ({baseRef}) => {
    const [astroids, setAstroids] = useState([]);
    const [ready, setReady] = useState(false);
    const maps = {
        mercury: useLoader(THREE.TextureLoader,[mercuryIm]),
        earth: useLoader(THREE.TextureLoader,[earthIm]),
        luna: useLoader(THREE.TextureLoader,[lunaIm]),
        jupiter: useLoader(THREE.TextureLoader,[jupiterIm])
    }

    useEffect(() => {
        let roids = [];
        for(let i=0; i<5000; i++){
            roids.push({
                size: Math.random()*.2+.2,
                distance: ((2*Math.random()+2*Math.random())-4)*10 + 100,
                spin: Math.random()/50
            });
        }
        setAstroids(roids);
    },[]);

    return <Background>
        <Sun
            name="sol"
            size={1}
        />
        {planets && planets.map(p => (
            <Planet
                key={p.name}
                planetName={p.name}
                baseRef={baseRef}
                size={p.size}
                distance={p.distance}
                revolutionSpeed={p.revSpeed}
                tilt={p.tilt}
                color={p.color}
                map={Object.keys(maps).includes(p.name) ? maps[p.name][0] : null}
                rotationSpeed={p.rotSpeed}
            >
                {p.satellites && p.satellites.map(s => (
                    <Planet
                        key={s.name}
                        planetName={s.name}
                        baseRef={baseRef}
                        size={s.size}
                        distance={s.distance}
                        revolutionSpeed={s.revSpeed}
                        tilt={s.tilt}
                        color={s.color}
                        map={Object.keys(maps).includes(s.name) ? maps[s.name][0] : null}
                        rotationSpeed={s.rotSpeed}
                    />
                ))}
            </Planet>
        ))}
        {
        astroids.map((a,i) => (
        <Astroid 
            key={i} 
            group={"belt"} 
            size={a.size*baseRef.size} 
            distance={a.distance*baseRef.distance} 
            spin={a.spin*baseRef.movement} 
        />
    ))}
    </Background>
}

export default SolarSystem;