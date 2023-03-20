'use client'
import { Inter } from 'next/font/google'

import Hero from './layouts/Hero'
import Who from './layouts/Who'
import Works from './layouts/Works'
import Contacts from './layouts/Contacts'

import { MainContainer } from './components/styledComponents/pageComponents'
import ThreeScene from './components/ThreeJs/cube/ThreeScene'

const inter = Inter({ subsets: ['latin'] })

// TODO: IMPLEMENT DARK MODE
export default function Home() {
  return (
    <main style={inter.style}>
      <MainContainer >
        <ThreeScene />
        <Hero />
        <Who />
        <Works />
        <Contacts />
      </MainContainer>
    </main>
  )
}
