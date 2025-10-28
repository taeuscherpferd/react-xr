import { useXRMeshes, XRMeshModel, XRSpace } from '@react-three/xr'

export const RedWalls = () => {
  const wallPlanes = useXRMeshes()
  return (
    <>
      {wallPlanes.map((plane) => (
        <XRSpace space={plane.meshSpace}>
          <XRMeshModel mesh={plane} />
        </XRSpace>
      ))}
    </>
  )
}
