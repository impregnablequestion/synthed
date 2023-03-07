import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { useDeletePresetMutation } from '../../app/services/presetsApi'
import { load_preset } from '../../features/synthSlice'

const PresetCard = ({preset}: PresetProps ) => {

  const dispatch = useAppDispatch();
  const [deletePreset] = useDeletePresetMutation();

  return (
    <PresetCardContainer>
      <p>{preset.name}</p>
      <p>{preset.tags}</p>
      <Button variant='outlined' size='small' 
      onClick={()=>{dispatch(load_preset(preset))}}
      >load</Button>
      <Button variant='outlined' size='small' 
      onClick={()=>{deletePreset(preset.id)}}
      >delete</Button>
    </PresetCardContainer>
  )
}

export default PresetCard

const PresetCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`