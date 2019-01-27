import React from "react"
import Header from "./Header"
import styled from "styled-components"
import TextSwap from "./TextLoop.js"

const StyledH1 = styled.h1`
  font-size: 46px;
  position: relative;
  top: 10rem;
  text-align: center;
  color: white;
`

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <div className="cd-fixed-bg cd-fixed-bg--1">
          <Header title="Portfolio" />
          <StyledH1>
            Cody Walraven is building <TextSwap /> websites.
          </StyledH1>
        </div>

        <div className="cd-scrolling-bg cd-scrolling-bg--color-2">
          <div className="cd-scrolling-bg__content">
            <p>Projects</p>
          </div>
        </div>

        <div className="cd-fixed-bg cd-fixed-bg--2">
        </div>
      </div>
    )
  }
}

export default Home
