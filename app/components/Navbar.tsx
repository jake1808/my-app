import React from 'react'
import { DiGithubAlt } from 'react-icons/di'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import {
  Logo,
  Button,
  Container,
  Icons,
  Links,
  List,
  ListItem,
  Section
} from '../components/styledComponents/navbarComponents'


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src='./logo.png' />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Who am I</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <a href="https://github.com/jake1808">
            <DiGithubAlt color='black' size={30} />
          </a>
          <a href="https://www.linkedin.com/in/jacob-mutale-a13167209/">
            <BsLinkedin color='black' size={20} />
          </a>
          <a href="">
            <BsWhatsapp color='black' size={20} />
          </a>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>

  )
}

export default Navbar