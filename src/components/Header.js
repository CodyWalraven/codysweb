import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  overflow: hidden;
  margin: 0px;
`

const StyledHeaderDiv = styled.div`
  background: rgba(0,0,0,0.9);
  backdrop-filter: invert(70%);
  padding: 20px 80px;
  text-align: left;
  color: white;
  font-size: 30px;
  position: sticky;
  top: 0;
  z-index: 1;
`

class Header extends React.Component {
  render() {
    return (
      <StyledHeaderDiv>
        <StyledH2>{this.props.title}</StyledH2>
      </StyledHeaderDiv>
    )
  }
}

export default Header
