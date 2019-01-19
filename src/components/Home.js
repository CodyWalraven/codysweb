import React from "react"
import Header from "./Header"
import styled from "styled-components"
import Background from './Background';
import TextSwap from './TextLoop.js'


const BackgroundDiv = styled.div`
  background: linear-gradient(#e7717d, #c2cad0);
  height: 1000px;
`

const StyledH1 = styled.h1`
  text-align: center;
  color: white;
  
`


class Home extends React.Component {
  state = {}
  render() {
    return (
      <BackgroundDiv>
        <Header title="Home" />
        <StyledH1>Cody Walraven is building <TextSwap /> designs</StyledH1>
      </BackgroundDiv>
    )
  }
}

export default Home
