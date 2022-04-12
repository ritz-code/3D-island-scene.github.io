// colors: yellowgreen, #5bb303(a lil darker), 
const IslandBase = ({ rotation, position1, position2, args1, args2 }) => {
    return (
        <group rotation={rotation}>
            <mesh receiveShadow position={position1} >
                <cylinderGeometry receiveShadow attach="geometry" args={args1} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="#5bb303" />
            </mesh>

            <mesh position={position2} >
                <cylinderGeometry attach="geometry" args={args2} />
                <meshStandardMaterial attach="material" metalness={[0.5]}
                    roughness={[0.5]} color="#c56a4b" />
            </mesh>
        </group>
    )
}

export default IslandBase;