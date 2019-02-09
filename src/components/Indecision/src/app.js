import React from "react"
import IndecisionApp from "./components/IndecisionApp"
import styled from 'styled-components'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const StyledDiv = styled.div `
  background-color: #333745;
  width: 100vw;
  height: 100vh;
`

class IndecisionMain extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <StyledDiv>
        <IndecisionApp />
      </StyledDiv>
    );
  }
}

export default IndecisionMain
