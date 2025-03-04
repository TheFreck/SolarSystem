import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export const Planet = (props) => {
    const {distance,color,size,revolutionSpeed,tilt,map,rotationSpeed,planetName,baseRef} = props;
    const hubRef = useRef();
    const spokeRef = useRef();
    const satelliteRef = useRef();
    const planetRef = useRef();

    const [ready,setReady] = useState(false);

    useEffect(() => {
        if(!planetName || !size || !baseRef.movement || !baseRef.distance || !baseRef.size) return;
        console.log("base movement: ", baseRef.movement);
        hubRef.current.position.x = 0;
        hubRef.current.position.y = 0;
        hubRef.current.position.z = 0;
        spokeRef.current.position.x = distance;
        spokeRef.current.rotation.z = tilt ? (tilt/360)*2*Math.PI : 0;
        satelliteRef.current.position.x = distance * baseRef.distance;
        if(planetName === "luna") spokeRef.current.rotation.x = .7*Math.PI;
        if(planetName === "luna") spokeRef.current.rotation.y = .1*Math.PI;
        if(planetName === "luna") spokeRef.current.rotation.z = 1*Math.PI;
        if(planetName === "luna") hubRef.current.rotation.y = 3*Math.PI/2;
        setReady(true);
    },[]);

    useFrame(() => {
        hubRef.current.rotation.y += revolutionSpeed * baseRef.movement ?? 0;
        spokeRef.current.rotation.y -= revolutionSpeed * baseRef.movement ?? 0;
        satelliteRef.current.rotation.y -= revolutionSpeed * baseRef.movement ?? 0;
        planetRef.current.rotation.y += rotationSpeed * baseRef.movement ?? 0;
    });

    return <mesh
        ref={hubRef}
    >
        <mesh
            ref={satelliteRef}
        >
            {props.children}
        </mesh>
        <mesh
            ref={spokeRef}
        >
            <mesh
                ref={planetRef}
                name={planetName}
            >
                {/* <axesHelper scale={size*2} /> */}
                {/* <gridHelper scale={size} /> */}
                <sphereGeometry 
                    args={[size,50,50]}
                    attach="geometry"
                />
                <meshStandardMaterial 
                    attach="material"
                    roughness={1}
                    color={color}
                    map={map}
                />
            </mesh>
        </mesh>
    </mesh>    
    
}

export default Planet;