import React      from 'react' 
import { useRef } from 'react'
import {
  useFrame,
  useLoader,
}                        from 'react-three-fiber'
import { TextureLoader } from 'three';
import earthTexture      from './images/earthTexture.jpg'
import earthElevation    from './images/earthElevation.jpg'


const Globe = () => {
  const ref = useRef<any>()
  useFrame(() => (ref.current.rotation.y += 0.01))

  const colorMap = useLoader(TextureLoader, earthTexture)
  const bumpMap  = useLoader(TextureLoader, earthElevation)
  
  return (
    <mesh ref={ref} scale={2}>
      <sphereGeometry attach='geometry'/>
      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={2}
      />
    </mesh>
  )
}

export default Globe
