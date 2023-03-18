import React from 'react'

import Navbar from './Navbar'
import {
    Button,
    Container,
    Desc,
    Img,
    Left,
    Line,
    Right,
    Section,
    Subtitle,
    Title,
    WhatIDo
} from '../components/styledComponents/heroComponents'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'


const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatIDo>
                        <Line src='./line.png' />
                        <Subtitle>What I do</Subtitle>
                    </WhatIDo>
                    <Desc>I enjoy creating delightful, human-centered digital experiences.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Canvas >
                        {/* TODO: CONTROLLING THE MOVEMENT OF THE CUBES */}
                        <OrbitControls enableZoom={false} />
                        {/* TODO:CONTROL THE LIGHT OF THE CUBE */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.3} >
                            <MeshDistortMaterial
                                color="#486972"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <Img src='./jacob-removebg.png' />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero