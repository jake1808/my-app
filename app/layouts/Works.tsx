import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Left,
  List,
  ListItem,
  Right,
  Section
} from '../components/styledComponents/worksComponents'

const data = [
  "NextJs",
  "React",
  "TailWind",
  "JavaScript",
  "SupaBase",
]


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