import { useFrame } from '@react-three/fiber'
import { Vector3Object } from '@react-three/rapier'
import { useXRControllerLocomotion, useXRInputSourceState, XROrigin } from '@react-three/xr'
import * as THREE from 'three'

export function VRPlayerControl({
  playerJump,
  playerMove,
}: {
  playerJump?: () => void
  playerMove: (params: {
    forward: boolean
    backward: boolean
    left: boolean
    right: boolean
    rotationYVelocity: number
    velocity?: Vector3Object
    newVelocity?: THREE.Vector3
  }) => void
}) {
  const controllerRight = useXRInputSourceState('controller', 'right')

  const physicsMove = (velocity: THREE.Vector3, rotationYVelocity: number) => {
    playerMove({
      forward: false,
      backward: false,
      left: false,
      right: false,
      rotationYVelocity,
      velocity: undefined,
      newVelocity: velocity,
    })
  }

  useXRControllerLocomotion(physicsMove, { speed: 5 })

  useFrame(() => {
    if (controllerRight?.gamepad?.['a-button']?.state === 'pressed') {
      playerJump?.()
    }
  })

  return <XROrigin position={[0, -1.25, 0]} />
}
