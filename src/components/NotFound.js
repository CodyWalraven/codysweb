import React from 'react'
import styled from 'styled-components'
import Header from './Header';

const StyledText = styled.h1`
font-size: 80px;
  font-weight:bold;
  align-self: auto;
  margin: 200px auto;

`


const StyledDiv = styled.div`
  text-align: center;
`

const NotFound = () => (
  
  <StyledDiv>
    <Header title="Page Not Found" home={true}/>
    <StyledText>Page Not Found</StyledText>
  </StyledDiv>
)

export default NotFound