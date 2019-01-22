import React, { Component } from "react"
import AppRouter from "./Routes"
import { ThemeProvider } from "styled-components"
import "normalize.css"
import "./styles/main.scss"

const theme = {
  main: "#2c3531",
  second: "#116466",
  third: "#d9b08c",
  fourth: "#ffcb9a",
  fifth: "#d1e8e2",
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
