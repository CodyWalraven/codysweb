import React from "react"
import styled from "styled-components"
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

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

const StyledButton = styled.button`
  background-color: rgba(0,0,0,0);
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

class Header extends React.Component {
  goBack = () => {
    history.goBack() 
  }

  render() {
    return (
      <StyledHeaderDiv>
        {this.props.home && <StyledButton onClick={this.goBack}>Go Home</StyledButton>}
        <StyledH2>{this.props.title}</StyledH2>
      </StyledHeaderDiv>
    )
  }
}

export default Header
