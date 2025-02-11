import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  useImperativeHandle,
  useRef,
} from 'react'
import { HandlesAxisHighlight } from '../axis.js'
import { AxisTranslateHandle } from './axis.js'
import { HandlesContext } from '../context.js'
import { TranslateHandleDelta } from './delta.js'
import { HandleOptions, HandleTransformOptions } from '@pmndrs/handle'
import { GroupProps } from '@react-three/fiber'
import { Group, Vector3Tuple } from 'three'
import { PlaneTranslateHandle } from './plane.js'
import { FreeTranslateHandle } from './free.js'
import { HandlesSize } from '../size.js'

export type TranslateHandlesProperties = GroupProps &
  Pick<HandleOptions<any>, 'alwaysUpdate' | 'apply' | 'stopPropagation'> & {
    enabled?: Exclude<HandleTransformOptions, Array<Vector3Tuple>>
    size?: number
    fixed?: boolean
  }

export const TranslateHandles: ForwardRefExoticComponent<
  PropsWithoutRef<TranslateHandlesProperties> & RefAttributes<Group>
> = forwardRef<Group, TranslateHandlesProperties>(
  ({ children, alwaysUpdate, apply, stopPropagation, enabled, size, fixed, ...props }, ref) => {
    const groupRef = useRef<Group>(null)
    useImperativeHandle(ref, () => groupRef.current!, [])
    return (
      <HandlesContext alwaysUpdate={alwaysUpdate} apply={apply} stopPropagation={stopPropagation} targetRef={groupRef}>
        <group ref={groupRef} {...props}>
          <HandlesSize size={size} fixed={fixed}>
            {/** XY */}
            <PlaneTranslateHandle
              enabled={enabled}
              color={0x0000ff}
              hoverColor={0xffff00}
              opacity={0.5}
              hoverOpacity={1}
              tag="xy"
            />

            {/** XZ */}
            <PlaneTranslateHandle
              enabled={enabled}
              rotation-x={Math.PI / 2}
              color={0x00ff00}
              hoverColor={0xffff00}
              opacity={0.5}
              hoverOpacity={1}
              tag="xz"
            />

            {/** YZ */}
            <PlaneTranslateHandle
              enabled={enabled}
              rotation-y={-Math.PI / 2}
              color={0xff0000}
              hoverColor={0xffff00}
              opacity={0.5}
              hoverOpacity={1}
              tag="yz"
            />

            {/** X */}
            <AxisTranslateHandle enabled={enabled} color={0xff0000} hoverColor={0xffff00} opacity={1} tag="x" />
            <AxisTranslateHandle
              enabled={enabled}
              color={0xff0000}
              hoverColor={0xffff00}
              opacity={1}
              invert
              showArrowBody={false}
              tag="x"
            />

            {/** Y */}
            <AxisTranslateHandle
              enabled={enabled}
              rotation-z={Math.PI / 2}
              color={0x00ff00}
              hoverColor={0xffff00}
              opacity={1}
              tag="y"
            />
            <AxisTranslateHandle
              enabled={enabled}
              rotation-z={Math.PI / 2}
              color={0x00ff00}
              hoverColor={0xffff00}
              opacity={1}
              invert
              showArrowBody={false}
              tag="y"
            />

            {/** Z */}
            <AxisTranslateHandle
              enabled={enabled}
              rotation-y={-Math.PI / 2}
              color={0x0000ff}
              hoverColor={0xffff00}
              opacity={1}
              tag="z"
            />
            <AxisTranslateHandle
              enabled={enabled}
              rotation-y={-Math.PI / 2}
              color={0x0000ff}
              hoverColor={0xffff00}
              opacity={1}
              invert
              showArrowBody={false}
              tag="z"
            />

            <FreeTranslateHandle enabled={enabled} />
          </HandlesSize>
          <TranslateHandleDelta />
          <HandlesAxisHighlight enabled={enabled} rotation-y={-Math.PI / 2} tag="z" />
          <HandlesAxisHighlight enabled={enabled} rotation-z={Math.PI / 2} tag="y" />
          <HandlesAxisHighlight enabled={enabled} tag="x" />
          {children}
        </group>
      </HandlesContext>
    )
  },
)

export * from './free.js'
export * from './axis.js'
export * from './delta.js'
export * from './plane.js'
