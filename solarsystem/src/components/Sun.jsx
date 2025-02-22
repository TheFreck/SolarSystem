import { useRef } from "react";

export const Sun = ({size,map}) => {
  const sunRef = useRef();

  return <mesh
    ref={sunRef}
    position={[0,0,0]}
    castShadow
  >
    <pointLight
        color="white"
        intensity={10000}
    />
    <meshStandardMaterial
        attach="material"
        emissive={"#2b2b01"}
        emissiveIntensity={10}
    />
    <sphereGeometry
        args={[size,50,50]}
        attach="geometry"
    />
  </mesh>
}

export default Sun;