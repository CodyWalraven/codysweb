import React from "react"
import Header from "./Header"
import styled from "styled-components"
import TextSwap from './TextLoop.js'




const StyledH1 = styled.h1`
  text-align: center;
  color: white;
  
`

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div>
          <Header title="Portfolio" />
          <StyledH1>Cody Walraven is building <TextSwap /> designs</StyledH1>
      </div>
    )
  }
}

export default Home
