import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Cube = () => {
    const textRef = useRef()
    // TODO: YOU CAN CHANGE THE SPEED OF THE TEXT HERE
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5))
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial >
                <RenderTexture attach="map">
                    {/* TODO:YOU CAN CHANGE THE PERSPECTIVE OF THE TEXT HERE */}
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 5]}
                    />
                    {/* TODO:YOU CAN CHANGE THE COLOR AND TEXT HERE OF THE CUBE*/}
                    <color attach="background" args={["blue"]} />
                    <Text ref={textRef} fontSize={3} color="white">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube