import React from 'react'
import styled from 'styled-components'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from '../components/ThreeJs/cube/Cube'
import {
    Button,
    Container,
    Desc,
    Left,
    Line,
    Right,
    Section,
    Subtitle,
    Title,
    WhatIDo
} from '../components/styledComponents/whoComponents'




const Who = () => {
    return (
        <Section>

            <Container>
                <Left>
                    <Canvas>
                        {/* TODO: CONTROLLING THE MOVEMENT OF THE CUBES */}
                        <OrbitControls enableZoom={false} />
                        {/* TODO:CONTROL THE LIGHT OF THE CUBE */}
                        <ambientLight intensity={1} />
                        <directionalLight position={3, 2, 1} />
                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think outside the square space</Title>
                    <WhatIDo>
                        <Line src='./line.png' />
                        <Subtitle>Who am I</Subtitle>
                    </WhatIDo>
                    <Desc>a creative designer and develops with a passion for the arts.</Desc>
                    <Button>See my github</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who