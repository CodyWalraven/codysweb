import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1 `
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
`

class Header extends React.Component {
  render() {
    return (
      <StyledH1>Codys Website Take Two</StyledH1>
    )
  }
}

export default Header