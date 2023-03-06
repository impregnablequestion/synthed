import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { play_note, stop_note } from '../../features/synthSlice'

const NoteButton = ({note}: NoteButtonProps) => {

  const [playing, setPlaying] = useState(false);

  const dispatch = useAppDispatch();
  
  const handleClick = () => {
    if (!playing) {
      dispatch(play_note(note))
      setPlaying(true);
    } else {
      dispatch(stop_note(note))
      setPlaying(false);
    }
  }

  useEffect(()=>{
    return () => {
      dispatch(stop_note(note));
    }
  }, [dispatch, note])

  return (
    <Circle
      onClick={()=>{handleClick()}}
    >
      {playing? "stop":"play"}
    </Circle>
  )
}

const Circle = styled.div`
  background-color: blue;
  color: white;
  aspect-ratio: 1/1;
  width: 100px;
  border-radius: 10ex;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: skyblue;
  }
`;

export default NoteButton;