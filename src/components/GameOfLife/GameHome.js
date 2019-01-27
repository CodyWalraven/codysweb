import React from "react"
import Header from "./../Header"
import Game from "./Game"
import styled from "styled-components"


class GameHomeScreen extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <Header title="Game Of Life" home={true} />
        <Game />
      </div>
    )
  }
}

export default GameHomeScreen
