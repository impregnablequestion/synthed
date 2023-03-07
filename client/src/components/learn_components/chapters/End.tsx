import React from 'react'
import { useNavigate } from 'react-router';
import { Text, Nav, Play, Chapter } from "../chapterStyles";

const End = ({next}: ChapterProps) => {
  const navigate = useNavigate();

  return (
    <Chapter>
      <Text>
        <p>Congrats, you've made it through all the lessons! Make your way over to the play view 
          to put your new synthesizer knowledge into practice!
        </p>
      </Text>
      <Play>
      </Play>
      <Nav>
        <button onClick={() => { navigate(next) }}>go to play!</button>
      </Nav>
    </Chapter>
  )
}

export default End