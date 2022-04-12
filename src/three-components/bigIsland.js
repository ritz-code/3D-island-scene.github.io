import React from "react";

import IslandBase from "./islandBase";
import GenerateRocks from "./generateRocks";
import GenerateBigTree from "./generateBigTree";

const BigIsland = () => {

    return (
        <group>
            <IslandBase 
                rotation={[Math.PI / 6, 0, 0]} 
                position1={[0, 1, 0]} 
                position2={[0, 0, 0]} 
                args1={[1.5, 1.5, 0.1, 12]} 
                args2={[1.5, 0.9, 2, 12]} 
            />
            <GenerateBigTree />
            <GenerateRocks />
        </group>
    )
}

export default BigIsland;