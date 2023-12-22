import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { useGLTF } from '@react-three/drei/native'
import modelPath from './shoe-draco.glb'
import Model from './src/components/Model.jsx'


export default function App() {

  return (
    <Canvas>
      <ambientLight />
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  )
}