import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export const Astroid = ({}) => {
    const [frame,setFrame] = useState(Math.random()*100);
    const [size, setSize] = useState(0);
    const [distance,setDistance] = useState(0);
    const [shapeX, setShapeX] = useState(0);
    const [shapeY, setShapeY] = useState(0);
    const [hasTwin,setHasTwin] = useState(false);
    const [rotationSpeed,setRotationSpeed] = useState(0);

    const astroidRef = useRef();

    useEffect(() => {
        if(Math.random() > .5) setHasTwin(true);
        setRotationSpeed(Math.random());
        let x = Math.random()*2*Math.PI;
        let d = Math.random()*30+120;
        let z = Math.sqrt(d*d-x*x);
        setSize(Math.random()*.1+.1);
        setShapeX(Math.floor(Math.random()*25));
        setShapeY(Math.floor(Math.random()*25));
        setDistance(d);
        astroidRef.current.position.x = x;
        astroidRef.current.position.z = z;
        astroidRef.current.position.y = Math.random()*10;
    },[]);

    useFrame(() => {
        astroidRef.current.position.x = Math.cos(-50*frame/distance)*distance;
        astroidRef.current.position.z = Math.sin(-50*frame/distance)*distance;
        astroidRef.current.rotation.x + frame;
        astroidRef.current.rotation.y + frame;
        astroidRef.current.rotation.z + frame;
        console.log(astroidRef.current);
        setFrame((frame + .01));
    });

    return <mesh
        ref={astroidRef}
        receiveShadow
        castShadow
    >
        <sphereGeometry 
            args={[size,shapeX,shapeY]}
            attach="geometry"
        />
        <meshPhysicalMaterial 
            attach="material"
            color="white"
        />
        {/* {
            hasTwin && <mesh

            >

            </mesh>
        } */}
    </mesh>
}

export default Astroid;