import React from "react"
import Header from "./Header"
import styled from "styled-components"
import TextSwap from './TextLoop.js'




const StyledH1 = styled.h1`
font-size: 46px;
  position: relative;
  top: 10rem;

  text-align: center;
  color: white; 
`



const LowerDiv = styled.div`
position: relative;
top: 75vh;
height: 800px;
background-color: #090E2c;

`

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div>
          <Header title="Portfolio" />
          <div >
            <StyledH1>Cody Walraven is building <TextSwap /> designs</StyledH1>
          </div>
          <LowerDiv />

      </div>
    )
  }
}

export default Home
