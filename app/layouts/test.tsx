import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;`

const test = () => {
    return (
        <Section>
            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <mesh scale={0.1} rotation-x={1} rotation-y={-1}>
                    <cylinderGeometry args={[5, 5, 1, 28, 1]} />
                    <meshStandardMaterial>
                        <RenderTexture attach="map">
                            <PerspectiveCamera
                                makeDefault
                                position={[0, 0, 1]}
                            />
                            <color attach='background' args={['red']} />
                        </RenderTexture>
                    </meshStandardMaterial>
                </mesh>
            </Canvas>
        </Section>
    )
}

export default test