import { GroupProps } from '@react-three/fiber'
import { ColorRepresentation, Vector3Tuple } from 'three'
import { RegisteredHandle } from '../context.js'
import { MeshHandlesContextMaterial } from '../material.js'
import { HandleTransformOptions } from '@pmndrs/handle'
import { useExtractHandleTransformOptions } from '../utils.js'
import { PropsWithoutRef } from 'react'

export type PlaneTranslateHandleProperties = {
  tag: 'xy' | 'yz' | 'xz'
  tagPrefix?: string
  enabled?: Exclude<HandleTransformOptions, Array<Vector3Tuple>>
  color: ColorRepresentation
  opacity: number
  hoverColor?: ColorRepresentation
  hoverOpacity?: number
  axes?: [Vector3Tuple, Vector3Tuple]
} & PropsWithoutRef<Omit<GroupProps, 'children'>>

export function PlaneTranslateHandle({
  tagPrefix = '',
  tag,
  color,
  hoverColor,
  opacity,
  hoverOpacity,
  enabled,
  axes,
  ...props
}: PlaneTranslateHandleProperties) {
  const translateOptions = useExtractHandleTransformOptions(tag, enabled)
  if (translateOptions === false) {
    return null
  }
  return (
    <RegisteredHandle
      {...props}
      translate={axes ?? translateOptions}
      tag={tagPrefix + tag}
      scale={false}
      rotate={false}
      multitouch={false}
    >
      <mesh renderOrder={Infinity} pointerEventsOrder={Infinity} position={[0.15, 0.15, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.01]} />
        <MeshHandlesContextMaterial
          tag={tagPrefix + tag}
          color={color}
          opacity={opacity}
          hoverOpacity={hoverOpacity}
          hoverColor={hoverColor}
        />
      </mesh>
    </RegisteredHandle>
  )
}
