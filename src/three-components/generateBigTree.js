import * as THREE from "three"
import GenerateBigTreeCanopy from "./generateBigTreeCanopy";

class CustomSinCurve extends THREE.Curve {

    constructor(scale = 1) {
        super();
        this.scale = scale;
    }

    getPoint(t, optionalTarget = new THREE.Vector3()) {
        const tx = t * 3 - 1.5;
        const ty = Math.sin(2 * Math.PI * t);
        const tz = 0;

        return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
    }

}

//curved paths used to generate tubeGeometry. USed tubeGeometry to make 
// 2 curved branches on the big pink tree.
const path = new CustomSinCurve(0.2);
const path2 = new CustomSinCurve(0.3);

const GenerateBigTree = () => {
    return (
        <group position={[-0.9, 0.9, 0.9]} rotation={[Math.PI / 10, 0, 0]} >
           {/**Trunk mesh */}
            <mesh castShadow receiveShadow >
                <cylinderBufferGeometry attach="geometry" args={[0.06, 0.15, 2]} />
                <meshStandardMaterial attach="material" metalness={[0.1]}
                    roughness={[0.5]} color="#c4936c" />
            </mesh>
            
            {/**curved branches meshes */}
            <mesh castShadow position={[0, 0.3, 0]} rotation={[0, Math.PI / 9, 0]} >
                <tubeBufferGeometry attach="geometry" args={[path, 70, 0.02, 50, false]} />
                <meshLambertMaterial attach="material" metalness={[0.1]}
                    roughness={[0.5]} color="#c4936c" />
            </mesh>
            <mesh castShadow position={[0, 0.7, 0]} rotation={[0, Math.PI + Math.PI / 2.5, 0]} >
                <tubeBufferGeometry attach="geometry" args={[path2, 70, 0.02, 50, false]} />
                <meshLambertMaterial attach="material" metalness={[0.1]}
                    roughness={[0.5]} color="#c4936c" />
            </mesh>

            <GenerateBigTreeCanopy />
        </group>
    )
}

export default GenerateBigTree;