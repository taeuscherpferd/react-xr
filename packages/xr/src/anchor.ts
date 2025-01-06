import { Matrix4, Quaternion, Vector3 } from 'three'
import { XRStore } from './store.js'
import { toDOMPointInit } from './utils.js'

const OneVector = new Vector3(1, 1, 1)
const ZeroVector = new Vector3(0, 0, 0)
const NeutralQuaternion = new Quaternion()

const matrixHelper1 = new Matrix4()
const matrixHelper2 = new Matrix4()
const quaternionHelper = new Quaternion()
const positionHelper = new Vector3()
const vectorHelper = new Vector3()

/*
export async function loadXRPersistentAnchor(session: XRSession, id: string): Promise<XRAnchor | undefined> {
  const anchorId = localStorage.getItem(id)
  if (anchorId == null || session == null) {
    return undefined
  }
  if (!('restorePersistentAnchor' in session)) {
    console.warn(`"restorePersistentAnchor" not supported`)
    return undefined
  }
  return (session.restorePersistentAnchor as (id: string) => Promise<XRAnchor>)(anchorId)
}

export async function requestXRPersistentAnchor(
  store: XRStore<any>,
  id: string,
  options: XRAnchorOptions,
  abortRef?: { current: boolean },
): Promise<XRAnchor | undefined> {
  const anchor = await requestXRAnchor(store, options)
  if (anchor == null || abortRef?.current === true) {
    return undefined
  }
  if (!('requestPersistentHandle' in anchor)) {
    console.warn(`"requestPersistentHandle" not supported`)
    return undefined
  }
  const anchorHandle = await (anchor.requestPersistentHandle as () => Promise<string>)()
  if (anchor == null || (abortRef?.current as boolean | undefined) === true) {
    return undefined
  }
  localStorage.setItem(id, anchorHandle)
  return anchor
}

export async function deleteXRPersistentAnchor(store: XRStore<any>, id: string) {
  const { session } = store.getState()
  if (session == null) {
    return
  }
  if (!('deletePersistentAnchor' in session)) {
    console.warn(`"deletePersistentAnchor" not supported`)
    return undefined
  }
  return (session.deletePersistentAnchor as (id: string) => Promise<undefined>)(id)
}*/

export type XRAnchorOptions = XRAnchorWorldOptions | XRAnchorSpaceOptions | XRAnchorHitTestResultOptions

export type XRAnchorWorldOptions = {
  relativeTo: 'world'
  worldPosition: Vector3
  worldQuaternion: Quaternion
  frame?: XRFrame
}

export type XRAnchorHitTestResultOptions = {
  relativeTo: 'hit-test-result'
  hitTestResult: XRHitTestResult
  offsetPosition?: Vector3
  offsetQuaternion?: Quaternion
}
export type XRAnchorSpaceOptions = {
  relativeTo: 'space'
  space: XRSpace
  offsetPosition?: Vector3
  offsetQuaternion?: Quaternion
  frame?: XRFrame
}

export async function requestXRAnchor(store: XRStore<any>, options: XRAnchorOptions): Promise<XRAnchor | undefined> {
  if (options.relativeTo === 'hit-test-result') {
    return options.hitTestResult.createAnchor?.(
      new XRRigidTransform(toDOMPointInit(options.offsetPosition), toDOMPointInit(options.offsetQuaternion)),
    )
  }
  let frame: XRFrame
  let space: XRSpace
  if (options.relativeTo === 'world') {
    frame = options.frame ?? (await store.requestFrame())
    const { origin, originReferenceSpace } = store.getState()
    if (originReferenceSpace == null) {
      return undefined
    }
    space = originReferenceSpace
    const { worldPosition, worldQuaternion } = options
    if (origin != null) {
      //compute vectorHelper and quaternionHelper in the local space of the origin
      origin.updateWorldMatrix(true, false)
      matrixHelper1.copy(origin.matrixWorld).invert()
      matrixHelper2.compose(worldPosition, worldQuaternion, OneVector).multiply(matrixHelper1)
      matrixHelper2.decompose(positionHelper, quaternionHelper, vectorHelper)

      quaternionHelper.setFromRotationMatrix(matrixHelper2)
    } else {
      positionHelper.copy(worldPosition)
      quaternionHelper.copy(worldQuaternion)
    }
  } else {
    frame = options.frame ?? (await store.requestFrame())
    space = options.space
    const { offsetPosition, offsetQuaternion } = options
    positionHelper.copy(offsetPosition ?? ZeroVector)
    quaternionHelper.copy(offsetQuaternion ?? NeutralQuaternion)
  }
  return frame.createAnchor?.(
    new XRRigidTransform(toDOMPointInit(positionHelper), toDOMPointInit(quaternionHelper)),
    space,
  )
}
