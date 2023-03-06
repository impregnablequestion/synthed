import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { change_param, play_note, stop_note } from '../../features/synthSlice'

const XY = ({xModule, xParam, yModule, yParam, xMin, xMax, yMin, yMax, note}: XYProps) => {

  const dispatch = useAppDispatch();

  const [localMousePos, setLocalMousePos] = useState({x: 0, y: 0})

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const localX = event.nativeEvent.offsetX
    const localY = event.nativeEvent.offsetY
    setLocalMousePos({x: localX, y: localY})
  }

  const yScale = (yMax-yMin)/200;
  const xScale = (xMax-xMin)/200;

  useEffect(()=>{
    if (yModule && yParam) {
      dispatch(change_param({
        module: yModule,
        param: yParam,
        value: localMousePos.y * yScale
      }));
    }
    if (xModule && xParam) {
      dispatch(change_param({
        module: xModule,
        param: xParam,
        value: localMousePos.x * xScale
      }))
    }
  }, [
    localMousePos,
    dispatch,
    xModule, yModule,
    xParam, yParam,
    xScale, yScale,
  ])
  
  const handleMouseDown = () => {
    dispatch(play_note(note));
  }

  const handleMouseUp = () => {
    dispatch(stop_note(note));
  }

  const handleMouseLeave = () => {
    dispatch(stop_note(note));
  }
  return (
    <Square
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    />
  )
}

const Square = styled.div`
  background-color: blue;
  color: white;
  aspect-ratio: 1/1;
  width: 200px;
  border: 1px solid blue;
  border-radius: 1ex;

  &:hover{
    opacity: 0.3;
  }
`;

export default XY