'use client'
import { Inter } from 'next/font/google'

import Hero from './layouts/Hero'
import Who from './layouts/Who'
import Works from './layouts/Works'
import Contacts from './layouts/Contacts'
import { MainContainer } from './components/styledComponents/pageComponents'

const inter = Inter({ subsets: ['latin'] })

// TODO: IMPLEMENT DARK MODE
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
