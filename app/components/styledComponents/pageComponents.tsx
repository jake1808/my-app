import styled from "styled-components";

//PAGE.TSX
export const MainContainer = styled.div`
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