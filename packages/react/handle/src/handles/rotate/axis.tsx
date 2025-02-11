import { Axis, HandleTransformOptions } from '@pmndrs/handle'
import { GroupProps, useFrame } from '@react-three/fiber'
import { ColorRepresentation, Group, Quaternion, TorusGeometry, Vector3, Vector3Tuple } from 'three'
import { RegisteredHandle } from '../context.js'
import { MeshHandlesContextMaterial } from '../material.js'
import { createCircleGeometry, RotateHandlesProperties } from './index.js'
import { useRef } from 'react'
import { useExtractHandleTransformOptions } from '../utils.js'

const axisCircleGeometry = createCircleGeometry(0.5, 0.5)
const vector1Helper = new Vector3()
const vector2Helper = new Vector3()
const quaternionHelper = new Quaternion()

export type AxisRotateHandleProperties = {
  tag: Axis
  enabled?: RotateHandlesProperties['enabled']
  color: ColorRepresentation
  opacity: number
  hoverColor?: ColorRepresentation
  hoverOpacity?: number
} & GroupProps

const config = {
  x: {
    vector: new Vector3(0, 0, -1),
    order: 'XYZ',
    set: {
      y: 0,
      z: 0,
    },
    axis: [1, 0, 0] as Vector3Tuple,
  },
  y: {
    vector: new Vector3(0, 0, -1),
    order: 'YXZ',
    set: {
      x: 0,
      z: Math.PI / 2,
    },
    axis: [0, 1, 0] as Vector3Tuple,
  },
  z: {
    vector: new Vector3(-1, 0, 0),
    order: 'ZYX',
    set: {
      x: 0,
      y: Math.PI / 2,
    },
    axis: [0, 0, 1] as Vector3Tuple,
  },
} as const

export function AxisRotateHandle({
  color,
  opacity,
  tag,
  hoverColor,
  hoverOpacity,
  enabled,
  ...props
}: AxisRotateHandleProperties) {
  const ref = useRef<Group>(null)
  useFrame((state) => {
    if (ref.current == null) {
      return
    }
    const { order, set, vector } = config[tag]
    state.camera.getWorldPosition(vector1Helper)
    ref.current.getWorldPosition(vector2Helper).sub(vector1Helper)
    quaternionHelper.setFromUnitVectors(vector, vector2Helper.normalize())
    ref.current.rotation.setFromQuaternion(quaternionHelper, order)
    for (const key in set) {
      ref.current.rotation[key as keyof typeof set] = set[key as keyof typeof set]
    }
  })
  const rotateOptions = useExtractHandleTransformOptions(tag, enabled)
  if (rotateOptions === false) {
    return null
  }
  return (
    <group {...props}>
      <group ref={ref}>
        <RegisteredHandle tag={tag} scale={false} translate="as-rotate" rotate={[config[tag].axis]} multitouch={false}>
          <mesh pointerEventsOrder={Infinity} visible={false} rotation={[0, -Math.PI / 2, -Math.PI / 2]}>
            <torusGeometry args={[0.5, 0.1, 4, 24]} />
          </mesh>
        </RegisteredHandle>
        <mesh renderOrder={Infinity} geometry={axisCircleGeometry}>
          <MeshHandlesContextMaterial
            color={color}
            opacity={opacity}
            tag={tag}
            hoverColor={hoverColor}
            hoverOpacity={hoverOpacity}
          />
        </mesh>
      </group>
    </group>
  )
}
