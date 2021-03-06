import React from 'react'
import Cell from './Cell'
import styled from 'styled-components'
import {emptyBoard, emptyState} from './patterns/empty'
import { gliderBoard, gliderState } from './patterns/gliderGun'
import { pentaBoard, pentaState } from './patterns/penta'
import {growthBoard, growthState} from './patterns/growth'
import {fancyBlinkerBoard, fancyBlinkerState} from './patterns/fancyBlinker'
import '../../styles/game.scss'


const StyledControlDiv = styled.div`
  margin: auto;
  border-radius: 20px;
  margin-top: 20px;
  width: 300px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background-color: #adcbff;
`
const StyledButton = styled.button`
  color: white;
  background: #ff9684;
  padding: 5px 10px;
  font-size: 18px;
  margin: 5px;
  border: none;
  outline: none;
  border-radius: 13px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  z-index: 2;

  &:active{
    background: #ffb4a8;
  }

  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transform: scaleY(1.01);
    transform: scaleX(1.01);
  }
`

const LoadDiv = styled.div`
  width: 16vw;
  height: 200px;
  position: absolute;
  right: 2rem;
  top: 30vh;
  display: flex;
  background-color: #adcbff;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 0;
`

export const CELL_SIZE = 20

let WIDTH = 800
let HEIGHT = 660
let mobileDevice = false
if (window.innerWidth < 700){
  WIDTH = 300
  HEIGHT = 340
  mobileDevice = true
}


class GameOfLife extends React.Component {
  constructor() {
    super()
    this.rows = HEIGHT / CELL_SIZE
    this.cols = WIDTH / CELL_SIZE
    this.board = this.makeEmptyBoard()
  }

  state = {
    cells: [],
    interval: 100,
    isRunning: false
  }

  runGame = () => {
    this.setState({ isRunning: true })
    this.runIteration()
  }
  stopGame = () => {
    this.setState({ isRunning: false })
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler)
      this.timeoutHandler = null
    }
  }
  handleIntervalChange = event => {
    this.setState({ interval: event.target.value })
  }

  runIteration = () => {
    let newBoard = this.makeEmptyBoard()
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y)
        if (this.board[y][x]) {
          if (neighbors === 2 || neighbors === 3) {
            newBoard[y][x] = true
          } else {
            newBoard[y][x] = false
          }
        } else {
          if (!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true
          }
        }
      }
    }
    this.board = newBoard
    this.setState({ cells: this.makeCells() })
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration()
    }, this.state.interval)
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i]
      let y1 = y + dir[0]
      let x1 = x + dir[1]

      if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
        neighbors++
      }
    }

    return neighbors
  }

  makeEmptyBoard = () => {
    let board = []
    for (let y = 0; y < this.rows; y++) {
      board[y] = []
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false
      }
    }
    return board
  }

  makeCells = () => {
    let cells = []
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y })
        }
      }
    }
    return cells
  }

  getElementOffset = () => {
    const rect = this.boardRef.getBoundingClientRect()
    const doc = document.documentElement
    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    }
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset()
    const offsetX = event.clientX - elemOffset.x
    const offsetY = event.clientY - elemOffset.y

    const x = Math.floor(offsetX / CELL_SIZE)
    const y = Math.floor(offsetY / CELL_SIZE)
    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x]
    }
    this.setState({ cells: this.makeCells() })
  }

  logBoard = () => {
    console.log(JSON.stringify(this.state.cells))
    console.log(JSON.stringify(this.board))
    
  }

  loadBoard = (board, state) => {
    this.board = board
    this.setState(() => ({
      cells: state
    }))
  }

  componentWillUnmount = () => {
    this.stopGame()
  }

  render() {
    const { cells } = this.state
    return (
      <div>
        <div
          className="Board"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n
          }}
        >
          {cells.map(cell => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
          ))}
        </div>
        <StyledControlDiv className="controls">
          Update every <input value={this.state.interval} onChange={this.handleIntervalChange} />{' '}
          msec
          {this.state.isRunning ? (
            <StyledButton onClick={this.stopGame}>Stop</StyledButton>
          ) : (
            <StyledButton onClick={this.runGame}>Run</StyledButton>
          )}
          {/* <StyledButton onClick={this.logBoard}>Save Board</StyledButton> */}
          <StyledButton onClick={() => this.loadBoard(emptyBoard, emptyState)}>Clear</StyledButton>
        </StyledControlDiv>
        {!mobileDevice && (
          <LoadDiv>
            
            <StyledButton onClick={() => this.loadBoard(gliderBoard, gliderState)}>
              Load Glider Gun
            </StyledButton>
            <StyledButton onClick={() => this.loadBoard(pentaBoard, pentaState)}>
              Load Pentadecathlon
            </StyledButton>
            <StyledButton onClick={() => this.loadBoard(growthBoard, growthState)}>
              Load Grow Machine
            </StyledButton>
            <StyledButton onClick={() => this.loadBoard(fancyBlinkerBoard, fancyBlinkerState)}>
              Load Fancy Blinker
            </StyledButton>
          </LoadDiv>
        )}
      </div>
    )
  }
}
export default GameOfLife
