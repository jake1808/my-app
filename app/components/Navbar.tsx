import React from 'react'
import styled from 'styled-components'
import {DiGithubAlt} from 'react-icons/di'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'


const Section = styled.div`
display: flex;
justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`
const Links = styled.div`
display: flex;
align-items: center;
/* gap: 5px; */
`
const Logo = styled.img`
  height: 70px;
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  cursor: pointer;
`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`
const Icons = styled.div`
  display: flex;
align-items: center;
gap: 20px;
`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src='./logo.png'/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Who am I</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <a href="https://github.com/jake1808">
                <DiGithubAlt color='black' size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/jacob-mutale-a13167209/">
                <BsLinkedin color='black'size={20}/>
                </a>
                <a href="">
                <BsWhatsapp color='black'size={20}/>
                </a>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>

  )
}

export default Navbar