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

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value)
  }

  const handleSubmit = async () => {

    if (name !== "" && tag !== "") {
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
    <div>
      <TextField 
      id="name"
      label="preset name"
      variant='outlined'
      required
      size='small'
      value={name}
      onChange={handleNameChange}
      />
      <TextField
      id="tag"
      label="tag"
      variant='outlined'
      required
      size='small'
      value={tag}
      onChange={handleTagChange}
      />
      <Button variant='outlined' onClick={handleSubmit}>save current settings</Button>
    </div>
  )
}

export default NewPreset