import React from "react"
import Header from "./../Header"
import styled from 'styled-components'
import GameOfLife from "./GameOfLife"

const StyledDiv = styled.div`
  background-image: url('https://images.unsplash.com/photo-1549571558-7ca00bbd1b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  height: 100vh;
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
