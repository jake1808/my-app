'use client'
import { Inter } from 'next/font/google'



import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contacts from './components/Contacts'
import styled from 'styled-components'
import Test from './components/ThreeJs/cube/Test'


const inter = Inter({ subsets: ['latin'] })

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
/* color: white; */
/* background: url('./background.jpg'); */
background-repeat: no-repeat;

&::-webkit-scrollbar{
  display: none;
}
`

export default function Home() {
  return (
    <main>
      <Container >
        <Hero />
        <Who />
        <Works />
        <Contacts />
        <Test />
      </Container>
    </main>
  )
}
