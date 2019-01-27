import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const StyledH2 = styled.h2`
  overflow: hidden;
  position: relative;
  left: 5vw;
  margin: 0px;
`

const StyledHeaderDiv = styled.div`
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: invert(70%);
  padding: 30px 80px;
  text-align: left;
  color: white;
  font-size: 30px;
  position: sticky;
  top: 0;
  z-index: 1;
`

const StyledSpan = styled.span`
  color: white;
  text-decoration: none;
`

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 6px;
  position: absolute;
  top: 0;
  left: 0;
`

class Header extends React.Component {
  render() {
    return (
      <StyledHeaderDiv>
        {this.props.home && <StyledNavLink to="/">Go Home</StyledNavLink>}
        <StyledH2>{this.props.title}</StyledH2>
      </StyledHeaderDiv>
    )
  }
}

export default Header
