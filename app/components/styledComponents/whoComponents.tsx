import styled from "styled-components"

export const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

export const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`
export const Left = styled.div`
    flex: 1;
   
`
export const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`
export const Title = styled.h1`
font-size: 74px;
`
export const WhatIDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
export const Line = styled.img`
height: 20px;
`
export const Subtitle = styled.h2`
color: darkblue;
`
export const Desc = styled.p`
font-size: 24px;
color: #646464;
`
export const Button = styled.button`
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