import React from "react"
import Header from "./../Header"
import styled from 'styled-components'
import mountains from '../../assets/mountains.jpg'
import GameOfLife from "./GameOfLife"

const StyledDiv = styled.div`
  background-image: url(${mountains});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

class GameHomeScreen extends React.Component {

  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <StyledDiv>
        <Header title={window.innerWidth < 500 ? 'Life' : 'Game Of Life'} home={true} />
        <GameOfLife />
      </StyledDiv>
    )
  }
}

export default GameHomeScreen
