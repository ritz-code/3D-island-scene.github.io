import React, { useMemo, Suspense } from "react";
import { Canvas, extend } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import * as THREE from "three";

import SmallIsland from "../three-components/smallIsland";
import BigIsland from "../three-components/bigIsland";
import Cloud from "../three-components/cloud";

import ArchivoBlack from '../assets/ArchivoBlack.json';
import Loading from "./loading";


extend({ TextGeometry });


function Home() {

    const font = new FontLoader().parse(ArchivoBlack);

    //memoizing to reuse the geometry
    const spinnerGeom = useMemo(() => new THREE.PlaneBufferGeometry(0.5), []); //args={[0.5]}
    const spinnerMat = useMemo(() => new THREE.MeshStandardMaterial(), []);

    //definining material roughness and metalness
    spinnerMat.roughness = 0.5;
    spinnerMat.metalness = 0.5;
    return (
        <>
            {/**Suspense fallback for loader screen */}
            <Suspense fallback={<Loading />} >
                <Canvas
                    gl={{ antialias: true, alpha: false }}
                    style={{ height: `1000px` }}
                    colorManagement
                    shadows
                    dpr={window.devicePixelRatio}
                    performance={{ min: 0.5 }}
                >
                    <fog attach="fog" args={["white", 3, 10]} />

                    <ambientLight intensity={[0.5]} />
                    <spotLight
                        castShadow
                        position={[2, 3, 4]}
                        angle={0.6}
                    />

                    <Sky
                        sunPosition={[5, 4, 8]}
                        azimuth={0.25}
                    />

                    <SmallIsland receiveShadow />
                    <BigIsland receiveShadow />

                    <Cloud position={[1., 2.5, 0]} />
                    <Cloud position={[-3, 1, -2]} />
                    <Cloud position={[2.5, 1, -0.3]} />
                    <Cloud position={[0, 2, -0.5]} />

                    {/**text geometry for 3D ritu rawat */}
                    <mesh
                        castShadow
                        position={[-0.8, 0.35, 1.5]}
                        rotation={[Math.PI / 6, Math.PI / 6, 0]}
                    >
                        <textGeometry args={['hello world', { font, size: 0.28, height: 0.1 }]} />
                        <meshStandardMaterial
                            attach="material"
                            metalness={[0.5]}
                            roughness={[0.5]}
                            color="#ffdf00"
                        />

                    </mesh>
                </Canvas>
            </Suspense>

        </>
    );
};


export default Home;