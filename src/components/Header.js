import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  overflow: hidden;
  margin: 0px;
`

const StyledDiv = styled.div`
  padding: 20px 80px;
  text-align: left;
  color: white;
  font-size: 30px;
  position: sticky;
  top: 0;
`

class Header extends React.Component {
  render() {
    return (
      <StyledDiv>
        <StyledH2>{this.props.title}</StyledH2>
      </StyledDiv>
    )
  }
}

export default Header
