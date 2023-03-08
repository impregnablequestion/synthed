import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useDeletePresetMutation, useUpdatePresetMutation } from '../../app/services/presetsApi'
import { load_preset, selectSettings } from '../../features/synthSlice'

const PresetCard = ({ preset, loaded, switchLoaded }: PresetProps) => {

  const selected = useAppSelector(selectSettings);

  const current = loaded === preset.id;

  const dispatch = useAppDispatch();
  const [deletePreset] = useDeletePresetMutation();
  const [updatePreset] = useUpdatePresetMutation();

  const handleLoad = () => {
    dispatch(load_preset(preset));
    switchLoaded(preset.id);
  }

  const handleUpdate = () => {
    updatePreset(selected);
  }

  const handleDelete = () => {
    deletePreset(preset.id);
  }

  return (
    <PresetCardContainer>
      <p>{preset.name}</p>
      <p>{preset.tags}</p>
      {
        current ?
          <Button variant='outlined' size='small' onClick={() => { handleUpdate() }}>
            update
          </Button>
          :
          <Button variant='outlined' size='small' onClick={() => { handleLoad() }}>
            load
          </Button>
      }
      <Button variant='outlined' size='small' onClick={() => { handleDelete()}}>delete
      </Button>
    </PresetCardContainer>
  )
}

export default PresetCard

const PresetCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`