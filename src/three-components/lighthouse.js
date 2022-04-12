const Lighthouse = () => {

    return (
        <group >
            <mesh position={[1.75, -1.35, -0.5]} rotation={[Math.PI / 15, 0, 0]}  >
                <cylinderBufferGeometry attach="geometry" args={[0.2, 0.2, 0.1]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="brown" />
            </mesh>
            <mesh position={[1.75, -1.35, -0.5]} rotation={[Math.PI / 15, 0, 0]}  >
                <cylinderBufferGeometry attach="geometry" args={[0.17, 0.2, 0.4]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="white" />
            </mesh>
            <mesh position={[1.75, -1.12, -0.45]} rotation={[Math.PI / 15, 0, 0]}  >
                <cylinderBufferGeometry attach="geometry" args={[0.18, 0.18, 0.05]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="brown" />
            </mesh>
            <mesh position={[1.75, -1.05, -0.43]} rotation={[Math.PI / 15, 0, 0]}  >
                <cylinderBufferGeometry attach="geometry" args={[0.16, 0.17, 0.23]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="#ffdf00" />
            </mesh>
            <mesh position={[1.75, -1.05, -0.43]} rotation={[Math.PI / 15, 0, 0]}  >
                <cylinderBufferGeometry attach="geometry" args={[0.17, 0.18, 0.2]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} wireframe wireframeLinewidth={10} color="brown" />
            </mesh>
            <mesh position={[1.75, -0.95, -0.415]} rotation={[Math.PI / 15, 0, 0]}  >
                <cylinderBufferGeometry attach="geometry" args={[0.18, 0.18, 0.03]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="brown" />
            </mesh>
            <mesh position={[1.75, -0.9, -0.39]} rotation={[Math.PI / 15, 0, 0]}  >
                <sphereGeometry attach="geometry" args={[0.16, 10, 16]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="brown" />
            </mesh>
            <mesh position={[1.75, -0.72, -0.345]} rotation={[Math.PI / 15, 0, 0]}  >
                <sphereGeometry attach="geometry" args={[0.03, 10, 16]} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="brown" />
            </mesh>
        </group>
    )
}

export default Lighthouse;