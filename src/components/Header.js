import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  overflow: hidden;
  margin: 0px;
`

const StyledDiv = styled.div`
  padding: 20px 80px;
  text-align: left;
  background: ${props => props.theme.second};
  color: white;
  font-size: 30px;
  box-shadow: 0px 0px 10px 5px ${props => props.theme.second};
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
