import { Cylinder } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { BackSide, Mesh } from 'three'

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;`

const Model = () => {
    const coinRef = useRef<Mesh>(null!)

    useFrame(() => {
        coinRef.current.rotation.x += 0.005;
        coinRef.current.rotation.y += 0.01
    });

    return (
        <mesh ref={coinRef} scale={0.25}>
            <Cylinder args={[5, 5, 1, 28, 1]} >
                <meshPhongMaterial
                    color={"#000000"}
                    emissive={'#000000'}
                    specular={'#625f8'}
                    shininess={50}
                    reflectivity={4}
                    refractionRatio={1}
                    side={BackSide}
                />
            </Cylinder>
        </mesh>
    )
}

const ThreeScene = () => {
    return (
        <Section>
            <Canvas>
                <Model />
            </Canvas>
        </Section>
    )
}

export default ThreeScene