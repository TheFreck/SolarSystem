import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export const Astroid = ({group,size,distance,spin}) => {
    const [twinSize, setTwinSize] = useState(0);
    const [shapeW, setShapeW] = useState(0);
    const [shapeH, setShapeH] = useState(0);
    const [twinW, setTwinW] = useState(0);
    const [twinH, setTwinH] = useState(0);
    const [hasTwin,setHasTwin] = useState(false);
    const [rotationSpeed,setRotationSpeed] = useState(0);
    const [startX, setStartX] = useState(0);
    const [startZ, setStartZ] = useState(0);

    const twinRef = useRef();
    const hubRef = useRef();
    const spokeRef = useRef();
    const astroidRef = useRef();

    useEffect(() => {
        let ts = Math.random()*size;
        setTwinSize(ts);
        setShapeW(Math.floor(Math.random()*25*size));
        setShapeH(Math.floor(Math.random()*25*size));
        setTwinW(Math.floor(Math.random()*25*ts));
        setTwinH(Math.floor(Math.random()*25*ts));
        setHasTwin(Math.random() < .16 ? true : false);

        hubRef.current.position.x = 0;
        hubRef.current.position.y = 0;
        hubRef.current.position.z = 0;
        hubRef.current.rotation.y = Math.random()*2*Math.PI;

        spokeRef.current.rotation.z = Math.random()*2*Math.PI;
        spokeRef.current.position.x = distance;

        astroidRef.current.rotation.y = Math.random()*2*Math.PI;
        twinRef.current.position.x = size*2*Math.random()+1;
    },[]);

    useFrame(() => {
        hubRef.current.rotation.y += .0001;
        astroidRef.current.rotation.z -= spin;
    });

    return <mesh
        ref={hubRef}
    >
        <mesh
            ref={spokeRef}
        >
            <mesh
                ref={astroidRef}
            >
                <sphereGeometry
                    args={[size,shapeW,shapeH]}
                    attach="geometry"
    
                />
                <meshStandardMaterial
                    color="gray"
                    attach="material"
                    metalness={1}
                    roughness={1}
                />
                <mesh
                    ref={twinRef}
                >
                    {hasTwin && 
                        <mesh>
                            <sphereGeometry
                                args={[twinSize,twinW,twinH]}
                                attach="geometry"
                            />
                            <meshStandardMaterial
                                color="gray"
                                attach="material"
                                metalness={1}
                                roughness={1}
                            />
                        </mesh>
                    }
                </mesh>
            </mesh>
        </mesh>
    </mesh>
}

export default Astroid;