import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from './BottomNav'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <FooterContainer>
      <BottomNav/>
      <p>made by séamus ryan</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`