import React from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom'


const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 6px;
  position: absolute;
  top: 0;
  left: 0;
`

const Header = props => (
  <div className="header">
    <div className="container">
    <StyledNavLink to="/">Go Home</StyledNavLink>
      <h1 className="header__title">{props.title}</h1>
      {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
    </div>
  </div>
)

Header.defaultProps = {
  title: "Indecision App"
}

export default Header
