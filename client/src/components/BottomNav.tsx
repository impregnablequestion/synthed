import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { Nav } from './learn_components/chapterStyles'

const BottomNav = ({previous, next, nextLabel}: BottomNavProps) => {

  const navigate = useNavigate();

  const label = `next: ${nextLabel}`

  return (
    <Nav>
      {previous && <Button onClick={()=>{navigate(-1)}}>back</Button>}
      <Button onClick={()=>{navigate("/")}}>home</Button>
      {next && <Button onClick={()=>{navigate(next)}}>{label}</Button>}
    </Nav>
  )
}

export default BottomNav