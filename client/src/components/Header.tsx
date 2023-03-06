import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {

  const navigate = useNavigate();

  return (
    <Title onClick={()=>navigate("../")}>synthed</Title>
  )
}

export default Header

const Title = styled.h1`
  color: green;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`