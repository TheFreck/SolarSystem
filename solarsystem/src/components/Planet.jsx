import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const Planet = (props) => {
    const {distance,color,size,revolutionSpeed,tilt,map} = props;
    const hubRef = useRef();
    const spokeRef = useRef();
    const planetRef = useRef();

    useEffect(() => {
        hubRef.current.position.x = 0;
        hubRef.current.position.y = 0;
        hubRef.current.position.z = 0;
        spokeRef.current.position.x = distance;
        planetRef.current.rotation.z = tilt ? (tilt/360)*2*Math.PI : 0;
    },[]);

    useFrame(() => {
        hubRef.current.rotation.y += revolutionSpeed ?? .01;
        spokeRef.current.rotation.y -= revolutionSpeed ?? .01;
    });

    return <mesh
        ref={hubRef}
    >
        <mesh
            ref={spokeRef}
        >
            <mesh
                ref={planetRef}
                receiveShadow
                castShadow
            >
                <sphereGeometry 
                    args={[size,50,50]}
                    attach="geometry"
                />
                <meshStandardMaterial 
                    attach="material"
                    metalness={1}
                    roughness={1}
                    map={map}
                />
                {props.children}
            </mesh>
        </mesh>
    </mesh>    
    
}

export default Planet;