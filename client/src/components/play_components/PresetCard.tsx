import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useDeletePresetMutation, useUpdatePresetMutation } from '../../app/services/presetsApi'
import { load_preset, selectSettings } from '../../features/synthSlice'

const PresetCard = ({ preset, loaded, switchLoaded }: PresetProps) => {

  const selected = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();
  const [deletePreset] = useDeletePresetMutation();
  const [updatePreset] = useUpdatePresetMutation();

  const current = loaded === preset.id;

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
      {
        current ?
          <Button disableElevation color="warning" variant='text' size='small' onClick={() => { handleUpdate() }}>
            update
          </Button>
          :
          <Button disableElevation color="secondary" variant='contained' size='small' onClick={() => { handleLoad() }}>
            load
          </Button>
      }
      <Button color="warning" variant='contained' size='small' onClick={() => { handleDelete()}}>delete
      </Button>
    </PresetCardContainer>
  )
}

export default PresetCard

const PresetCardContainer = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 15px; */
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 10px;
  text-align: left;
`