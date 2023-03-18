import React from 'react'
import styled from 'styled-components'

const data = [
  "NextJs",
  "React",
  "TailWind",
  "JavaScript",
  "SupaBase",
]

interface ListItemProp {
  text: string
}

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
flex:1 ;
display: flex;
align-items: center;
`
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;

`

const ListItem = styled.li<ListItemProp>`
font-size: 90px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px black;
position: relative;

::after{
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: blue;
  width: 0px;
  overflow: hidden;


  white-space: nowrap;
}

&:hover{
  ::after{
    animation: moveText 0.5s linear both;
    @keyframes moveText {
      to{
        width: 100%;
      }
    }
  }
}

`
const Right = styled.div`
flex: 1;
`


const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => {
              return (
                <ListItem key={item} text={item}>
                  {item}
                </ListItem>)
            }
            )
            }
          </List>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Works