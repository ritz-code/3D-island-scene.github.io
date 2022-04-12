import { GradientTexture } from '@react-three/drei';

const GenerateBigTreeCanopy = () => {


    return (
        <group>

            <mesh castShadow position={[0, 1.2, 0]} scale={[0.8, 0.5, 0.6]} >
                <dodecahedronBufferGeometry attach="geometry" args={[0.5]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]}>
                    <GradientTexture
                        stops={[0, 0.5]} // As many stops as you want between 0.0 to 1.0
                        colors={['pink', 'hotpink']} // Colors need to match the number of stops
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[0.4, 1.2, 0]} scale={[0.8, 0.5, 0.45]} rotation={[Math.PI / 3, 0, 0]} >
                <icosahedronBufferGeometry attach="geometry" args={[0.5]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.75]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>

            <mesh position={[0, 1.4, -0.4]} scale={[0.8, 0.5, 0.6]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.5]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.75]}
                        colors={['pink', 'hotpink']} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[-0.5, 1.4, -0.4]} scale={[0.8, 0.5, 0.6]} rotation={[Math.PI / 1, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.5]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.9]} 
                        colors={['pink', 'hotpink']} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[-0.6, 1.1, -0.4]} scale={[0.8, 0.2, 0.6]} rotation={[Math.PI / 3, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.6]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.2]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>

            <mesh position={[-0.5, 1.3, -0.1]} scale={[0.8, 0.5, 0.6]} rotation={[0, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.2]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.5]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[0.2, 1.1, 0.2]} scale={[0.8, 0.5, 0.6]} rotation={[0, Math.PI / 5, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.3]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.75]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[-0.4, 1.2, -0.1]} scale={[0.8, 0.5, 0.6]} rotation={[Math.PI / 8, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.3]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.75]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[-0.2, 1.1, 0.1]} scale={[0.5, 0.5, 0.5]} rotation={[Math.PI / 9, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.3]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.5]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[-0.4, 1, -0.1]} scale={[0.8, 0.7, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.3]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.3]}
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[-0.8, 0.8, -0.25]} scale={[0.5, 0.3, 0.5]} rotation={[0, Math.PI / 9, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.4]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.75]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>

            {/** bottom part */}
            <mesh castShadow position={[-0.2, 0.5, 0.4]} scale={[0.5, 0.3, 0.3]} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.6]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.1]}
                        colors={['pink', 'hotpink']} 
                        size={1024}
                    />
                </meshStandardMaterial>
            </mesh>

            {/**back branch */}
            <mesh castShadow position={[0.3, 0.8, -0.3]} scale={[0.4, 0.3, 0.3]} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.8]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.5]} 
                        colors={['pink', 'hotpink']} 
                        size={1024}
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[0.1, 0.7, -0.1]} scale={[0.4, 0.3, 0.3]} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.3]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.3]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} // 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh castShadow position={[0.1, 0.8, 0]} scale={[0.6, 0.3, 0.3]} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.4]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.1]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>

            <mesh position={[-0.3, 0.35, 0.6]} scale={[0.3, 0.3, 0.3]} rotation={[Math.PI / 6, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.4]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.4]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>

            <mesh position={[-0.13, 0.7, 0.4]} scale={[0.3, 0.3, 0.3]} rotation={[Math.PI / 6, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.2]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.2]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[-0.3, 0.3, 0.1]} scale={[0.5, 0.3, 0.3]} rotation={[Math.PI / 6, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.4]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.1]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>

            {/** bottom most */}
            <mesh castShadow position={[0.3, 0.3, -0.2]} scale={[0.7, 0.5, 0.5]} rotation={[Math.PI / 4, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.3]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.2]} 
                        colors={['pink', 'hotpink']}
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh castShadow position={[0.2, 0.25, 0]} scale={[0.5, 0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.2]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.3]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh position={[0.2, 0.35, 0]} scale={[0.5, 0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.15]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.3]} 
                        colors={['pink', 'hotpink']} 
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>

            <mesh castShadow position={[0.1, 0.5, 0.1]} scale={[0.5, 0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <icosahedronBufferGeometry attach="geometry" args={[0.1]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} >
                    <GradientTexture
                        stops={[0, 0.3]} 
                        colors={['pink', 'hotpink']}
                        size={1024} 
                    />
                </meshStandardMaterial>
            </mesh>
        </group>
    )
}

export default GenerateBigTreeCanopy;