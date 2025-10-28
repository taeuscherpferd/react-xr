import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createXRStore, XR } from '@react-three/xr'
import * as THREE from 'three'
import { RedWalls } from './RedWalls.js'
import './styles.css'

const store = createXRStore()

const axisColor = new THREE.Color('#9d3d4a')
const gridColor = new THREE.Color('#4f4f4f')

export function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [5, 3, 5] }}>
        <color attach={'background'} args={['#3f3f3f']} />
        <gridHelper args={[50, 50, axisColor, gridColor]} />
        <XR store={store}>
          <RedWalls />
        </XR>
        <OrbitControls />
      </Canvas>
      <button onClick={() => store.enterAR()}>{'Enter XR'}</button>
    </div>
  )
}
