import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import TextSwap from './TextLoop.js'

const StyledH1 = styled.h1`
  font-size: 46px;
  position: relative;
  top: 10rem;
  text-align: center;
  color: white;
`

const ProjectHeader = styled.h1`
  font-size: 45px;
  font-weight: bold;
  position: relative;
  top: 1rem;
  text-align: center;
  color: white;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`

const ProjectDiv = styled.div`
  width: 60vw;
  height: 30vh;
  background-color: #e9f5fe;
  position: relative;
  bottom: 20px;
  margin: auto;
  margin-top: 40px;
  padding: 30px;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  text-align: center;

  @media only screen and (max-width: 800px) {
    
    width: 90vw;
    height: 30vh;
  }
  
  @media only screen and (max-width: 500px) {
    padding: 10px;
    margin-top: 20px;
    width: 90vw;
    height: 60vh;
  }

  
`

const NewStyledButton = styled.button`
  color: white;
  background: #ff9684;
  padding: 20px 44px;
  font-size: 24px;
  margin: 5px;
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 2;

  &:active {
    background: #ffb4a8;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scaleY(1.01);
    transform: scaleX(1.01);
  }
`

const Home = () => (
  <div>
    <div className="cd-fixed-bg cd-fixed-bg--1">
      <Header title="Portfolio" />
      <StyledH1>
        Cody Walraven is building <TextSwap /> websites.
      </StyledH1>
    </div>
    <div className="cd-scrolling-bg cd-scrolling-bg--color-1">
      <div className="cd-scrolling-bg__content">
        <ProjectHeader>Weather</ProjectHeader>
        <ProjectDiv>
          <p>
            A from scratch weather application using automatic geo location and weather api's to
            display results without granting location access. It also has a dynamic background
            changing based on current temperature.
          </p>
          <br />
          <NavLink to="/weather">
            <NewStyledButton>Weather App</NewStyledButton>
          </NavLink>
        </ProjectDiv>
      </div>
    </div>

    <div className="cd-fixed-bg cd-fixed-bg--2" />

    <div className="cd-scrolling-bg cd-scrolling-bg--color-1">
      <div className="cd-scrolling-bg__content">
        <ProjectHeader>Game of Life</ProjectHeader>
        <ProjectDiv>
          <p>
            Conway's game of life is one of the earliest examples of artificial life simulated by a
            computer, it is governed by simple rules that result
            in complex and organic shapes evolving as time passes. This implementation
            has added the ability to load in some famous patterns and implements all new styling to
            the design.
          </p>
          <br />
          <NavLink to="gamehomescreen">
            <NewStyledButton>Game Of Life</NewStyledButton>
          </NavLink>
        </ProjectDiv>
      </div>
    </div>

    <div className="cd-fixed-bg cd-fixed-bg--3" />
    <div className="cd-scrolling-bg cd-scrolling-bg--color-1">
      <div className="cd-scrolling-bg__content">
        <ProjectHeader>Indecision App</ProjectHeader>
        <ProjectDiv>
          <p>
            The indecision app is perfect for those who are unable to decide on anything, it allows
            you to enter multiple choices and have a computer select one for you. This project is
            one I built following the the wonderful react tutorial by Andrew Mead.
          </p>
          <br />
          <NavLink to="indecision">
            <NewStyledButton>Indecision App</NewStyledButton>
          </NavLink>
        </ProjectDiv>
      </div>
    </div>

    <div className="cd-fixed-bg cd-fixed-bg--4" />
  </div>
)

export default Home
