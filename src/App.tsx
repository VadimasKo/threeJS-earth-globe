import React from 'react'

import { Canvas }        from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Globe             from './Globe';
import styles            from './App.module.css'


function App() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Rotating Globe using ThreeJS</h2>
      <Canvas className={styles.canvas}>
        <OrbitControls enableZoom/>
        <ambientLight intensity={0.5}/>
        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        />
        <Globe/>
      </Canvas>
    </div>
  );
}

export default App;
