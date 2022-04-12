import { useMemo } from "react";
import * as THREE from "three";

const Cloud = ({ position }) => {

    //memoizing to reuse the geometry
    const geometry = useMemo(() => new THREE.DodecahedronBufferGeometry(0.5), []); //args={[0.5]}
    const material = useMemo(() => new THREE.MeshStandardMaterial(), []);

    //definining material roughness and metalness
    material.roughness = 0.5;
    material.metalness = 0.5;

    //generatng a group of 3 dodecahedrons to make a single cloud
    return (
        <group position={position}>
            <mesh position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]} 
                geometry={geometry}
                material={material}    
            />

            <mesh position={[-0.3, 0, 0]} scale={[0.3, 0.3, 0.3]}
                geometry={geometry}
                material={material}    
                />

            <mesh position={[0.3, 0, 0]} scale={[0.4, 0.4, 0.4]} 
                geometry={geometry}
                material={material}    
                />
        </group>
    )
}

export default Cloud;