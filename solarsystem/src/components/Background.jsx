import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const Background = (props) => {
  const backRef = useRef();

  useFrame(() => {
    // backRef.current.rotation.y -= .0042;
  })

    return <mesh
    ref={backRef}
    name="box"
    receiveShadow
    position={[0,0,0]}
  >
    <ambientLight intensity={.01} />
    <boxGeometry
      args={[1000,1000,1000]}
      
    />
    <meshPhongMaterial
      color="darkgray"
      side={THREE.DoubleSide}
      opacity={0}
      transparent
    />
    {props.children}
  </mesh>
}

export default Background