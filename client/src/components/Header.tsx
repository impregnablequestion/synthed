import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router'
import HorizontalSlider from './controls/HorizontalSlider'

const Header = () => {

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Title onClick={() => navigate("../")}>synthed</Title>
      <SliderWithLabel>
        <label>master volume</label>
        <HorizontalSlider module='general' param='master_gain' min={0} max={1} step={0.01} />
      </SliderWithLabel>
    </HeaderContainer>
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

const SliderWithLabel = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
`