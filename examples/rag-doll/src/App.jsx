import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Cursor } from './helpers/Drag.js'
import { Guy } from './components/Guy.jsx'
import { Mug, Chair, Table, Lamp } from './components/Furniture.jsx'
import { createXRStore, noEvents, useXRControllerLocomotion, XR, XROrigin, PointerEvents } from '@react-three/xr'
import { useRef, Suspense } from 'react'

const store = createXRStore({
  hand: { touchPointer: false },
  secondaryInputSources: true,
})

export function App() {
  return (
    <>
      <button
        style={{
          position: 'absolute',
          zIndex: 10000,
          background: 'black',
          borderRadius: '0.5rem',
          border: 'none',
          fontWeight: 'bold',
          color: 'white',
          padding: '1rem 2rem',
          cursor: 'pointer',
          fontSize: '1.5rem',
          bottom: '1rem',
          left: '50%',
          boxShadow: '0px 0px 20px rgba(0,0,0,1)',
          transform: 'translate(-50%, 0)',
        }}
        onClick={() => store.enterVR()}
      >
        Enter VR
      </button>
      <Canvas
        onPointerMissed={() => console.log('missed')}
        dpr={[1, 2]}
        shadows
        events={noEvents}
        camera={{ position: [-40, 40, 40], fov: 25 }}
      >
        <PointerEvents />
        <OrbitControls />
        <XR store={store}>
          <color attach="background" args={['#171720']} />
          <fog attach="fog" args={['#171720', 60, 90]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[-20, -5, -20]} color="red" />
          <Suspense>
            <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
              <Cursor />
              <Guy rotation={[-Math.PI / 3, 0, 0]} />
              <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
              <Chair position={[0, 0, -2.52]} />
              <Table position={[8, 0, 0]} />
              <Mug position={[8, 3, 0]} />
              <Lamp position={[0, 15, 0]} />
            </Physics>
          </Suspense>
          <group position={[0, -5, 0]}>
            <ControlledXROrigin />
          </group>
        </XR>
      </Canvas>
    </>
  )
}

function ControlledXROrigin() {
  const ref = useRef(null)
  useXRControllerLocomotion(ref, { speed: 10 })
  return <XROrigin ref={ref} scale={10} />
}

function Floor(props) {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial
        color="#878790"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  )
}
