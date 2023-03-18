import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const Title = styled.h1`
font-size: 74px;
`
const WhatIDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Line = styled.img`
height: 20px;
`
const Subtitle = styled.h2`
color: darkblue;
`
const Desc = styled.p`
font-size: 24px;
color: #646464;
`
const Button = styled.button`
background-color: blue;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`
const Right = styled.div`
position: relative;
flex: 3;
`
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(20px);
    }
}

`


const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>Think. Make. Solve.</Title>
                <WhatIDo>
                    <Line src='./line.png'/>
                    <Subtitle>What I do</Subtitle>
                </WhatIDo>
                <Desc>I enjoy creating delightful, human-centered digital experiences.</Desc>
                <Button>Learn More</Button>
            </Left>
            <Right>
                {/* Todo: 3d-model */}
                <Img src='./jacob.jpg'/>
            </Right>
        </Container>
    </Section>
  )
}

export default Hero