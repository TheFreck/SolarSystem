import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export const Astroid = ({group,frameStart}) => {
    const [frame,setFrame] = useState(0);
    const [size, setSize] = useState(0);
    const [distance,setDistance] = useState(0);
    const [shapeX, setShapeX] = useState(0);
    const [shapeY, setShapeY] = useState(0);
    const [hasTwin,setHasTwin] = useState(false);
    const [rotationSpeed,setRotationSpeed] = useState(0);
    const [startX, setStartX] = useState(0);
    const [startZ, setStartZ] = useState(0);

    const astroidRef = useRef();

    useEffect(() => {
        console.log("frameStart: ", frameStart);
        if(Math.random() > .5) setHasTwin(true);
        setRotationSpeed(Math.random());
        let x = Math.random()*2*Math.PI;
        setStartX(x);
        // let d = Math.random()*30+120;
        let d = 20
        let z = Math.sqrt(d*d-x*x);
        setStartZ(z);
        // setSize(Math.random()*.1+.1);
        setSize(1);
        setShapeX(Math.floor(Math.random()*25));
        setShapeY(Math.floor(Math.random()*25));
        setDistance(d);
        astroidRef.current.position.x = x;
        astroidRef.current.position.z = z;
        astroidRef.current.position.y = Math.random()*10;
    },[]);

    useFrame(() => {
        astroidRef.current.position.x = Math.cos(-50*frame)*distance;
        astroidRef.current.position.z = Math.sin(-50*frame)*distance;
        // astroidRef.current.position.y = Math.sin(frame);
        console.log("frame: ", frame);
        // console.log("azimuth: ", Math.sin(frame));
        // console.log("x: ", astroidRef.current.position.x);
        console.log("z: ", astroidRef.current.position.z);
        astroidRef.current.rotation.x + frame;
        astroidRef.current.rotation.y + frame;
        astroidRef.current.rotation.z + frame;
        // console.log(astroidRef.current);
        // if(Math.abs(astroidRef.current.position.x - startX) > .1 && Math.abs(astroidRef.current.position.z - startZ) > .1)
            setFrame((frame + .001));
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