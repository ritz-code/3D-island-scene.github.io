import React, { useMemo } from "react";
import * as THREE from "three";

/** #b79779 #c76e4e  */


const GenerateRocks = ({ args, position, scale }) => {
        //memoizing to reuse the geometry
        const rockGeom = useMemo(() => new THREE.DodecahedronBufferGeometry(0.5), []); //args={[0.5]}
        const rockMat = useMemo(() => new THREE.MeshStandardMaterial(), []);
    
        //definining material roughness and metalness
        rockMat.roughness = 0.5;
        rockMat.metalness = 0.5;
        rockMat.color = new THREE.Color("#dbf1f1");

    return (
        <>
                    {/**Generating the falling rocks */}
            <mesh 
                position={[-0.5, -1, 0.4]} 
                scale={[0.8, 0.8, 0.8]}
                geometry={rockGeom}
                material={rockMat}    
            />
            <mesh 
                position={[0.85, -0.1, 0.7]} 
                scale={[0.6, 0.6, 0.6]}
                geometry={rockGeom}
                material={rockMat}    
            />
            <mesh 
                position={[-0.5, -2.5, 0.6]} 
                scale={[0.25, 0.25, 0.25]}
                geometry={rockGeom}
                material={rockMat}    
            />
            <mesh 
                position={[0, -2, 0]} 
                scale={[0.35, 0.4, 0.35]}
                geometry={rockGeom}
                material={rockMat}    
            />
            <mesh 
                position={[0.7, -1.5, 0.4]} 
                scale={[0.15, 0.15, 0.25]}
                geometry={rockGeom}
                material={rockMat}    
            />
            <mesh 
                position={[0.5, -1.75, -1]} 
                scale={[0.15, 0.15, 0.25]}
                geometry={rockGeom}
                material={rockMat}    
            />
        </>
    )
}

/**
 *             <mesh position={position} scale={scale} >
                <dodecahedronBufferGeometry attach="geometry" args={[0.5]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="#dbf1f1" />
            </mesh>
 */
//#a2a2a0  grey, original
export default GenerateRocks;