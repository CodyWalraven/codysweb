import React, { Component } from "react"
import AppRouter from "./Routes"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import "normalize.css"
import "./styles/main.scss"

const theme = {
  main: "#E7717d",
  second: "#c2cad0",
  third: "#c2b9b0",
  fourth: "#7e685a",
  fifth: "#afd275",
  smallSize: "1.2rem",
  mediumSize: "1.6rem",
  largeSize: "3.2rem",
  extraLargeSize: "4.8rem",
  desktopBreakpoint: "45rem"
}


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    )
  }
}

export default App
