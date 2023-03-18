import styled from "styled-components"

export const Section = styled.div`
display: flex;
justify-content: center;
`
export const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
`
export const Links = styled.div`
display: flex;
align-items: center;
/* gap: 5px; */
`
export const Logo = styled.img`
height: 70px;
`

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`

export const ListItem = styled.li`
  cursor: pointer;
`

export const Icons = styled.div`
  display: flex;
align-items: center;
gap: 20px;
`

export const Button = styled.button`
width: 100px;
padding: 10px;
background-color: blue;
color: white;
border: none;
cursor: pointer;
border-radius: 5px;
`
