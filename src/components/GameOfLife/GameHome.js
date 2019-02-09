import React from "react"
import Header from "./../Header"
import GameOfLife from "./GameOfLife"


class GameHomeScreen extends React.Component {

  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <Header title={window.innerWidth < 500 ? 'Life' : 'Game Of Life'} home={true} />
        <GameOfLife />
      </div>
    )
  }
}

export default GameHomeScreen
