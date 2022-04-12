import IslandBase from "./islandBase";
import GenerateRocks from "./generateRocks";
import GenerateXmasTrees from "./generateXmasTrees";
import Lighthouse from "./lighthouse";

const SmallIsland = () => {
    return (
        <group>
            <IslandBase rotation={[Math.PI / 12, -Math.PI / 10, 0]} position1={[1.75, -1.5, -0.6]} position2={[1.75, -1.75, -0.6]} args1={[.5, .5, 0.1, 8]} args2={[.5, 0.2, 0.5, 8]} />


            <GenerateXmasTrees position={[2, -1, -0.1]} />
            <GenerateXmasTrees position={[1.5, -0.95, -0.3]} />

            <Lighthouse />

            {/**The single falling rock below small island */}
            <mesh position={[2, -2, 0]} scale={[0.15, 0.15, 0.15]} >
                <dodecahedronBufferGeometry attach="geometry" args={[0.5]} />
                <meshStandardMaterial 
                    attach="material" 
                    metalness={[0.5]}
                    roughness={[0.5]} 
                    color="#dbf1f1"
                />
            </mesh>
        </group>
    )
}

export default SmallIsland;