import React from 'react'
import styled from 'styled-components'
import {DiGithubAlt} from 'react-icons/di'
import Test from './ThreeJs/cube/Test'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
   
`
const Right = styled.div`
flex: 1;
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
text-align: center;
color: white;
font-weight: 500;
width: 150px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`




const Who = () => {
  return (
    <Section>

        <Container>
            <Left>
                <Test/>
            </Left>
            <Right>
                <Title>Think outside the square space</Title>
                <WhatIDo>
                    <Line src='./line.png'/>
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