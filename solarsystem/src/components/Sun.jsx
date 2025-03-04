import { useEffect, useRef } from "react";

export const Sun = ({size, intensity}) => {
  const sunRef = useRef();

  useEffect(() => {
    // console.log("sun");
  },[]);

  return <mesh
    ref={sunRef}
    position={[0,0,0]}
    castShadow
  >
    <pointLight
        color="white"
        intensity={intensity ? intensity : 10000}
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