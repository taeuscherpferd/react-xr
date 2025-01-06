import { XROrigin, useControllerLocomotion } from '@react-three/xr'
import { useRef } from 'react'
import { Group } from 'three'

export const Player = () => {
  const playerRef = useRef<Group>(null)
  useControllerLocomotion(playerRef)
  return (
    <>
      <XROrigin ref={playerRef} />
    </>
  )
}
