import React from 'react'
import styled from 'styled-components'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const goBack = () => {
  history.goBack()
}

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: 20px;
  padding: 6px;
  position: absolute;
  top: 5px;
  left: 5px;
`

const Header = props => (
  <div className="header">
    <div className="container">
      <StyledButton onClick={goBack}>Go Home</StyledButton>
      <br />
      <h1 className="header__title">{props.title}</h1>
      {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
    </div>
  </div>
)

Header.defaultProps = {
  title: 'Indecision App'
}

export default Header
