import React from "react"
import Header from "./Header"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import TextSwap from "./TextLoop.js"

const StyledH1 = styled.h1`
  font-size: 46px;
  position: relative;
  top: 10rem;
  text-align: center;
  color: white;
`

const GameOfLifeHeader = styled.h1`
  font-size: 36px;
  position: relative;
  top: 1rem;
  text-align: center;
  color: white;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`

const GameOfLifeDiv = styled.div`
  width: 70vw;
  height: 30vh;
  background-color: white;
  position: relative;
  margin: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
`

const StyledButton = styled.button`
  color: white;
  background: #008cba;
  padding: 4px 12px;
  margin: 5px;
  border: none;
  outline: none;
  border-radius: 80px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.4);
`

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <div className="cd-fixed-bg cd-fixed-bg--1">
          <Header title="Portfolio" />
          <StyledH1>
            Cody Walraven is building <TextSwap /> websites.
          </StyledH1>
        </div>
        <div className="cd-scrolling-bg cd-scrolling-bg--color-1">
          <div className="cd-scrolling-bg__content">
            <GameOfLifeHeader>Game of Life</GameOfLifeHeader>
            <GameOfLifeDiv>
              <p>
                Conway's game of life is one of the earliest examples of
                artificial life simulated by a computer, it is a representation
                of cellular life governed by simple rules that result in complex
                and organic shapes forming and evolving as time passes.{" "}
              </p>
              <br />
              <NavLink to="gamehomescreen">
                <StyledButton>Game Of Life</StyledButton>
              </NavLink>
            </GameOfLifeDiv>
          </div>
        </div>
        <div className="cd-fixed-bg cd-fixed-bg--2" />

        <div className="cd-scrolling-bg cd-scrolling-bg--color-1">
          <div className="cd-scrolling-bg__content">
            <p>Projects</p>
          </div>
        </div>

        <div className="cd-fixed-bg cd-fixed-bg--3" />
      </div>
    )
  }
}

export default Home
