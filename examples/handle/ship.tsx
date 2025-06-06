/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Maksim Batyrev (https://sketchfab.com/c3posw01)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-pirate-ship-1c62191534174bf7a67470fb02b97db1
Title: Stylized Pirate Ship
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Handle } from '@react-three/handle'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

type GLTFResult = GLTF & {
  nodes: {
    StylShip_Anchor_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Body_Mat_StylShip_ShipHull_0: THREE.Mesh
    StylShip_Bracing_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Support_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_FencingBack_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_FencingFront_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_FencingMid_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_FloorBackBottom_Mat_StylShip_Decks_0: THREE.Mesh
    StylShip_FloorBackTop_Mat_StylShip_Decks_0: THREE.Mesh
    StylShip_FloorFront_Mat_StylShip_Decks_0: THREE.Mesh
    StylShip_FloorMid_Mat_StylShip_Decks_0: THREE.Mesh
    StylShip_Loopholes_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_LoopholeCap1_left_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_MastBack_Mat_StylShip_Masts_0: THREE.Mesh
    StylShip_Prow_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Rudder_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_SailBack_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_StairsBot_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_StairsSmall_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_StairsTop_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Wall_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Wheel_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_WheelStand_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Windows_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Ropes_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_MastFront_Mat_StylShip_Masts_0: THREE.Mesh
    StylShip_SailMid2_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_MainFlag_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_MastMid_Mat_StylShip_Masts_0: THREE.Mesh
    StylShip_SailMid1_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_SailFront_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_WireBack_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_WireMid_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_WireFront_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_Flag1_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_Flag2_Mat_StylShip_SailsRope_0: THREE.Mesh
    StylShip_LoopholeCap1_right_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_LoopholeCap2_right_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_LoopholeCap2_left_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_LoopholeCap3_left_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_LoopholeCap3_right_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Door1_Mat_StylShip_Elements_0: THREE.Mesh
    StylShip_Door2_Mat_StylShip_Elements_0: THREE.Mesh
    WaterPlane_Mat_Water_0: THREE.Mesh
    StylShip_Pallet3_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Cannon3_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Cannon5_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Pallet5_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Cannon4_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Pallet4_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Cannon1_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Pallet1_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Cannon2_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Pallet2_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Barrel2_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box4_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box3_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Barrel1_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box2_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Barrel5_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Barrel4_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box8_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box6_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box5_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box7_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Barrel6_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box9_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box10_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Barrel3_Mat_StylShip_Props_0: THREE.Mesh
    StylShip_Box1_Mat_StylShip_Props_0: THREE.Mesh
  }
  materials: {
    Mat_StylShip_Elements: THREE.MeshStandardMaterial
    Mat_StylShip_ShipHull: THREE.MeshStandardMaterial
    Mat_StylShip_Decks: THREE.MeshStandardMaterial
    Mat_StylShip_Masts: THREE.MeshStandardMaterial
    Mat_StylShip_SailsRope: THREE.MeshStandardMaterial
    Mat_Water: THREE.MeshStandardMaterial
    Mat_StylShip_Props: THREE.MeshStandardMaterial
  }
}

export function Ship(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/ship.glb') as any as GLTFResult
  useFrame((_, deltaTime) => {
    materials.Mat_Water.map!.offset.y += deltaTime * 0.1
  })
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.017}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[2.85, 34.675, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_Body_Mat_StylShip_ShipHull_0.geometry}
              material={materials.Mat_StylShip_ShipHull}
              position={[0, -28.009, 5.359]}
            />
          </group>
          <group position={[26.153, 70.845, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_Bracing_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[-140.462, -57.262, -3.323]}
            />
          </group>
          <group position={[146.649, 104.101, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_FencingBack_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -26.937, 0]}
            />
          </group>
          <group position={[-140.356, 78.785, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_FencingFront_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -26.878, 0]}
            />
          </group>
          <group position={[2.354, 60.689, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_FencingMid_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -51.853, 0]}
            />
          </group>
          <group position={[146.734, 42.856, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_FloorBackBottom_Mat_StylShip_Decks_0.geometry}
              material={materials.Mat_StylShip_Decks}
              position={[0.212, -26.272, 0.017]}
            />
          </group>
          <group position={[146.544, 93.108, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_FloorBackTop_Mat_StylShip_Decks_0.geometry}
              material={materials.Mat_StylShip_Decks}
              position={[0, -25.794, -1.671]}
            />
          </group>
          <group position={[-141.543, 54.784, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_FloorFront_Mat_StylShip_Decks_0.geometry}
              material={materials.Mat_StylShip_Decks}
              position={[-0.967, -25.563, -1.109]}
            />
          </group>
          <group position={[-0.639, 44.552, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_FloorMid_Mat_StylShip_Decks_0.geometry}
              material={materials.Mat_StylShip_Decks}
              position={[0, -25.404, -1.753]}
            />
          </group>
          <group position={[41.892, 9.367, 50.848]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_LoopholeCap1_left_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -4.61, -3.873]}
            />
          </group>
          <group position={[204.794, 6.559, -0.347]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_Rudder_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[11.068, 0, -15.069]}
            />
          </group>
          <group position={[92.756, 22.029, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_StairsBot_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -27.367, 0]}
            />
          </group>
          <group position={[-65.617, 54.337, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_StairsSmall_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -38.568, 0]}
            />
          </group>
          <group position={[102.388, 110.735, -0.289]} rotation={[-Math.PI / 2, 0, 0]}>
            <Handle translate="as-rotate" rotate="x">
              <mesh
                geometry={nodes.StylShip_Wheel_Mat_StylShip_Elements_0.geometry}
                material={materials.Mat_StylShip_Elements}
                position={[-1.865, 23.591, 1.143]}
              />
            </Handle>
          </group>
          <group position={[41.892, 9.375, -50.857]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_LoopholeCap1_right_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -106.315, -3.881]}
            />
          </group>
          <group position={[-29.509, 9.375, -50.857]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_LoopholeCap2_right_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -106.315, -3.881]}
            />
          </group>
          <group position={[-29.551, 9.367, 50.848]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.StylShip_LoopholeCap2_left_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -4.61, -3.873]}
            />
          </group>
          <group position={[-109.653, 9.367, 48.938]} rotation={[-Math.PI / 2, 0, -0.087]}>
            <mesh
              geometry={nodes.StylShip_LoopholeCap3_left_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -4.61, -3.873]}
            />
          </group>
          <group position={[-109.658, 9.375, -48.965]} rotation={[-Math.PI / 2, 0, 0.087]}>
            <mesh
              geometry={nodes.StylShip_LoopholeCap3_right_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[0, -106.315, -3.881]}
            />
          </group>
          <group position={[80.831, 61.645, 17.119]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.985, 1]}>
            <mesh
              geometry={nodes.StylShip_Door1_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[-0.032, -16.161, 0]}
            />
          </group>
          <group position={[80.831, 61.645, -16.891]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.981, 1]}>
            <mesh
              geometry={nodes.StylShip_Door2_Mat_StylShip_Elements_0.geometry}
              material={materials.Mat_StylShip_Elements}
              position={[-0.032, -143.24, 0]}
            />
          </group>
          <mesh
            geometry={nodes.StylShip_Anchor_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[-194.145, 13.671, 19.6]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Support_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[58.656, 20.967, -13.977]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Loopholes_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[41.752, 15.76, 43.921]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_MastBack_Mat_StylShip_Masts_0.geometry}
            material={materials.Mat_StylShip_Masts}
            position={[170.724, 151.431, -0.405]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Prow_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[-265.557, 84.375, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_SailBack_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[130.099, 185.263, -2.938]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_StairsTop_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[55.693, 68.658, 38.443]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Wall_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[80.831, 67.569, 24.657]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_WheelStand_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[94.508, 103.158, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Windows_Mat_StylShip_Elements_0.geometry}
            material={materials.Mat_StylShip_Elements}
            position={[163.767, 69.633, 33.435]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Ropes_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[-50.653, 177.172, -3.465]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_MastFront_Mat_StylShip_Masts_0.geometry}
            material={materials.Mat_StylShip_Masts}
            position={[-121.264, 141.639, -0.042]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_SailMid2_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[-24.081, 296.716, -0.042]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_MainFlag_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[-34.453, 350.62, 1.32]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_MastMid_Mat_StylShip_Masts_0.geometry}
            material={materials.Mat_StylShip_Masts}
            position={[-17.477, 116.405, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_SailMid1_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[-33.035, 169.677, -0.102]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_SailFront_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[-131.201, 155.754, -0.042]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_WireBack_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[163.044, 170.362, 39.409]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_WireMid_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[1.176, 137.235, 35.889]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_WireFront_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[-113.787, 136.505, 45.588]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Flag1_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[-140.289, 276.005, 1.812]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Flag2_Mat_StylShip_SailsRope_0.geometry}
            material={materials.Mat_StylShip_SailsRope}
            position={[152.163, 293.658, 1.979]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.WaterPlane_Mat_Water_0.geometry}
            material={materials.Mat_Water}
            renderOrder={-1000}
            position={[5.67, -9.488, -2.278]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3}
          />
          <mesh
            geometry={nodes.StylShip_Pallet3_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-109.543, 1.143, 22.04]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Cannon3_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-109.543, 8.521, 24.183]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Cannon5_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[42.455, 8.682, 25.342]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Pallet5_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[42.455, 1.303, 23.199]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Cannon4_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-30.268, 8.759, -26.344]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Pallet4_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-30.268, 1.381, -24.202]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Cannon1_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-170.085, 72.733, 14.15]}
            rotation={[-Math.PI / 2, 0, 0.698]}
          />
          <mesh
            geometry={nodes.StylShip_Pallet1_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-168.443, 65.354, 12.772]}
            rotation={[-Math.PI / 2, 0, 0.698]}
          />
          <mesh
            geometry={nodes.StylShip_Cannon2_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-133.635, 72.614, -30.819]}
            rotation={[-Math.PI / 2, 0, -1.484]}
          />
          <mesh
            geometry={nodes.StylShip_Pallet2_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-133.448, 65.236, -28.684]}
            rotation={[-Math.PI / 2, 0, -1.484]}
          />
          <mesh
            geometry={nodes.StylShip_Barrel2_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-6.192, 49.997, -43.004]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Box4_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[145.171, 96.646, -45.233]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Box3_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[135.721, 96.646, -45.233]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Barrel1_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-70.485, 49.946, 22.697]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Box2_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-71.297, 47.996, 12.084]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Barrel5_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[171.343, 6.609, 10.842]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Barrel4_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-78.909, 6.688, 28.907]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Box8_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-153.714, 4.602, 19.514]}
            rotation={[-Math.PI / 2, 0, -0.262]}
          />
          <mesh
            geometry={nodes.StylShip_Box6_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[181.652, 47.911, 40.173]}
            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
          />
          <mesh
            geometry={nodes.StylShip_Box5_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[171.368, 47.911, 42.141]}
            rotation={[-Math.PI / 2, 0, -1.484]}
          />
          <mesh
            geometry={nodes.StylShip_Box7_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[177.295, 56.977, 40.917]}
            rotation={[-Math.PI / 2, 0, 0.087]}
          />
          <mesh
            geometry={nodes.StylShip_Barrel6_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[174.635, 6.687, 22.871]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Box9_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[24.755, 4.791, 31.131]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Box10_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[90.048, 4.454, -29.051]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.StylShip_Barrel3_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[193.237, 98.765, 30.853]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StylShip_Box1_Mat_StylShip_Props_0.geometry}
            material={materials.Mat_StylShip_Props}
            position={[-174.816, 68.621, -22.591]}
            rotation={[-Math.PI / 2, 0, Math.PI / 6]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ship.glb')
