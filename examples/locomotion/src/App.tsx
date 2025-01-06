import { Box } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createXRStore, XR } from '@react-three/xr'
import { Vector3 } from 'three'
import { Player } from './Player.jsx'

const store = createXRStore()
const floorVector = new Vector3(20, 0.5, 20)

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
      <Canvas>
        <XR store={store}>
          <Box scale={floorVector}>
            <meshBasicMaterial color={'#9eeb34'} />
          </Box>
          <Player />
        </XR>
      </Canvas>
    </>
  )
}
