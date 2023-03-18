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
                    {/* Todo: 3d-model */}
                    <Img src='./jacob.jpg' />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero