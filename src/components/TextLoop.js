import React from 'react'
import TextLoop from 'react-text-loop'
import styled from 'styled-components'

const StyledSpan = styled.span`
  color: #ffcb9a;
`

const TextSwap = () => (
  <TextLoop interval={1300}>
    <StyledSpan>interactive</StyledSpan>
    <StyledSpan>responsive</StyledSpan>
    <StyledSpan>elegant</StyledSpan>
    <StyledSpan>beautiful</StyledSpan>
  </TextLoop>
)

export default TextSwap
