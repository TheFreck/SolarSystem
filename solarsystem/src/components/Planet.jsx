import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Planet = ({distance,color,size}) => {
    const [frame,setFrame] = useState(Math.random()*100);
    const planetRef = useRef();



    useFrame(() => {
        planetRef.current.position.x = Math.cos(-50*frame/distance)*distance;
        planetRef.current.position.z = Math.sin(-50*frame/distance)*distance;
        setFrame((frame + .01));
    });

    return <mesh
        ref={planetRef}
        receiveShadow
        castShadow
    >
        <sphereGeometry 
            args={[size,100,100]}
            attach="geometry"
        />
        <meshPhysicalMaterial 
            attach="material"
            color={color}
        />
    </mesh>
}

export default Planet;