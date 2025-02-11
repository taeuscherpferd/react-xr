import { Object3D, Object3DEventMap, Vector2, Vector3, Vector3Tuple } from 'three'
import { StoreApi } from 'zustand/vanilla'
import { getVoidObject, PointerEventsMap, WheelEvent } from '@pmndrs/pointer-events'
import { Camera, useStore, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { defaultScreenCameraApply, ScreenCameraState } from './camera.js'
import { useScreenHandleStore } from './store.js'
import { convertScreenSpaceMovementToGlobalPan } from './utils.js'

const resultHelper = new Vector3()
const centerHelper = new Vector2()

export function useScreenCameraZoomHandle(
  store: StoreApi<ScreenCameraState>,
  speed: number = 1,
  enabled: boolean = true,
  zoomToPointer: boolean = false,
  apply = defaultScreenCameraApply,
) {
  const voidObject = useThree((s) => getVoidObject(s.scene) as Object3D<PointerEventsMap & Object3DEventMap>)
  const speedRef = useRef(speed)
  speedRef.current = speed

  const applyRef = useRef(apply)
  applyRef.current = apply

  const zoomToPointerRef = useRef(zoomToPointer)
  zoomToPointerRef.current = zoomToPointer

  const fiberStore = useStore()

  useEffect(() => {
    if (!enabled) {
      return
    }

    const onWheel = (e: WheelEvent) => {
      const zoomFactor = Math.pow(0.95, speedRef.current * e.deltaY * 0.01)
      const update: Partial<ScreenCameraState> = {
        distance: store.getState().distance / zoomFactor,
      }
      if (e.intersection.details.type === 'screen-ray' && zoomToPointerRef.current) {
        const state = store.getState()
        update.origin = computeOriginFromZoomToPoint(
          e.intersection.details.screenPoint,
          state,
          state.origin,
          fiberStore.getState().camera,
          zoomFactor,
        )
      }

      applyRef.current(update, store)
    }
    voidObject.addEventListener('wheel', onWheel)
    return () => voidObject.removeEventListener('wheel', onWheel)
  }, [voidObject, enabled, store, fiberStore])

  useScreenHandleStore<{ distance: number; origin: Readonly<Vector3Tuple> }>(
    ({ distance: initialDistance, origin: initialOrigin }, map) => {
      if (map.size < 2) {
        return
      }
      const [p1, p2] = map.values()
      const initialPointerDistance = p1.initialScreenPosition.distanceTo(p2.initialScreenPosition)
      const currentPointerDistance = p1.currentScreenPosition.distanceTo(p2.currentScreenPosition)

      const zoomFactor = currentPointerDistance / initialPointerDistance

      const update: Partial<ScreenCameraState> = {
        distance: initialDistance / zoomFactor,
      }

      if (zoomToPointerRef.current) {
        centerHelper.copy(p1.currentScreenPosition).add(p2.currentScreenPosition).multiplyScalar(0.5)
        update.origin = computeOriginFromZoomToPoint(
          centerHelper,
          store.getState(),
          initialOrigin,
          fiberStore.getState().camera,
          zoomFactor,
        )
      }

      applyRef.current(update, store)
    },
    () => ({ distance: store.getState().distance, origin: store.getState().origin }),
    [store],
    enabled,
  )
}

const vector2Helper = new Vector2()

function computeOriginFromZoomToPoint(
  point: Vector2,
  state: ScreenCameraState,
  origin: Readonly<Vector3Tuple>,
  camera: Camera,
  zoomFactor: number,
) {
  vector2Helper.copy(point).multiplyScalar(-(zoomFactor - 1) / zoomFactor)
  convertScreenSpaceMovementToGlobalPan(state, camera, vector2Helper, resultHelper, 1, 'screen')
  const [x, y, z] = origin
  resultHelper.x += x
  resultHelper.y += y
  resultHelper.z += z

  return resultHelper.toArray()
}
