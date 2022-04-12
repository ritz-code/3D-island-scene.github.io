const GenerateXmasTrees = ({ position }) => {
    return (
        <group position={position} rotation={[Math.PI / 15, 0, 0]}>
            <mesh castShadow position={[0, -0.25, -0.05]}  >
                <coneBufferGeometry attach="geometry" args={[0.08, 0.3, 4]} />
                <meshStandardMaterial attach="material" metalness={[0.1]}
                    roughness={[0.5]} color="#5bb303" />
            </mesh>
            <mesh castShadow position={[0, -0.1, -0.05]} >
                <coneBufferGeometry attach="geometry" args={[0.055, 0.3, 4]} />
                <meshStandardMaterial attach="material" metalness={[0.1]}
                    roughness={[0.5]} color="#5bb303" />
            </mesh>
            <mesh castShadow position={[0, -0.35, -0.05]}  >
                <coneBufferGeometry attach="geometry" args={[0.055, 0.3, 4]} />
                <meshStandardMaterial attach="material" metalness={[0.1]}
                    roughness={[0.5]} color="brown" />
            </mesh>
        </group>
    )
}
//green, original
export default GenerateXmasTrees;