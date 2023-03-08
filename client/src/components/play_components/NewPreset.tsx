import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { useAddPresetMutation } from '../../app/services/presetsApi'
import { selectSettings } from '../../features/synthSlice'

const NewPreset = () => {

  const selected = useAppSelector(selectSettings);

  const [addPreset, response] = useAddPresetMutation();
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  // const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTag(event.target.value)
  // }

  const handleSubmit = async () => {

    if (name !== "") {
      try {
        const {id, ...noId} = selected;
        const newPreset: Settings = {
          ...noId,
          name: name,
          tags: tag
        }
        const feedback = await addPreset(newPreset).unwrap();
        setName("");
        setTag("");
        console.log(feedback);
      } catch {
        console.log(response.error);
      }
    }
  }

  return (
    <PresetForm>
      <TextField 
      id="name"
      label="preset name"
      variant='outlined'
      required
      size='small'
      value={name}
      onChange={handleNameChange}
      inputProps={{maxLength: 14}}
      />
      {/* <TextField
      id="tag"
      label="tag"
      variant='outlined'
      required
      size='small'
      value={tag}
      onChange={handleTagChange}
      inputProps={{maxLength: 14}}
      /> */}
      <Button variant='outlined' onClick={handleSubmit}>new preset</Button>
    </PresetForm>
  )
}

export default NewPreset

const PresetForm = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 0rem 2rem;
`