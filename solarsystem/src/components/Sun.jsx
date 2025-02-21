import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import transparent from "../assets/transparent.png"
import { useRef } from "react";

export const Sun = () => {
    const [textureTrans] = useLoader(THREE.TextureLoader, [transparent]);
    const sunRef = useRef();

    return <mesh
    ref={sunRef}
    position={[0,0,0]}
    castShadow
  >
    <pointLight
        color="white"
        intensity={50000}
    />
    <meshStandardMaterial
        attach="material"
        map={textureTrans}
        emissive="yellow"
    />
    <sphereGeometry
        args={[10,100,100]}
        attach="geometry"
    />
  </mesh>
}

export default Sun;