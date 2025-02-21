import * as THREE from "three";

export const Background = (props) => {

    return <mesh
    name="box"
    receiveShadow
    position={[0,0,0]}
  >
    <boxGeometry
      args={[1000,1000,1000]}
      
    />
    <meshPhongMaterial
      color="darkgray"
      side={THREE.DoubleSide}
      opacity={1}
    />
    {props.children}
  </mesh>
}

export default Background