import React from 'react'
import Header from './../Header'

class GameHomeScreen extends React.Component {
  state = {  }
  render() {
    return (
      <div>
        <Header title="Game Of Life" home={true} />
        <p>Test</p>
      </div>
    );
  }
}

export default GameHomeScreen