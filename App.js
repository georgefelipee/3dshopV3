import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { useGLTF } from '@react-three/drei/native'
import modelPath from './shoe-draco.glb'
import Model from './src/components/Model.jsx'
import useControls from 'r3f-native-orbitcontrols'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export default function App() {
  const [Orbitcontrols,events]= useControls()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer} {...events}>
         <Canvas>
          <ambientLight />
          <Orbitcontrols enablePan={false}/>
          <directionalLight position={[1,0, 0]} args={['white', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[0, 1, 0]} args={['white', 5]} />
          <directionalLight position={[0, -1, 0]} args={['white', 5]} />
          <directionalLight position={[0, 0, 1]} args={['white', 5]} />
          <directionalLight position={[0, 0, -1]} args={['white', 5]} />
          <Suspense>
            <Model />
          </Suspense>
        </Canvas>
      </View>
    </SafeAreaView>
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modelContainer:{
    width: '100%',
    height: '100%',
  }
})
