import React from 'react'
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import HorizontalSlider from './controls/HorizontalSlider';
import { Button } from '@mui/material';

const Header = () => {

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Button
      onClick={() => navigate("../")}
      sx={{
        padding: "1rem"
      }}><h1>synthed</h1></Button>
      <SliderWithLabel>
        <label>master volume</label>
        <HorizontalSlider module='general' param='master_gain' min={0} max={1} step={0.01} />
      </SliderWithLabel>
    </HeaderContainer>
  )
}

export default Header

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