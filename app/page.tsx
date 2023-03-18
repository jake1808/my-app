'use client'
import { Inter } from 'next/font/google'


import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contacts from './components/Contacts'
import { MainContainer } from './components/styledComponents/pageComponents'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main style={inter.style}>
      <MainContainer >
        <Hero />
        <Who />
        <Works />
        <Contacts />
      </MainContainer>
    </main>
  )
}
