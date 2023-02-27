import React from 'react'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import "react-piano/dist/styles.css"

// TODO: Wire keyboard up to audio engine

const Keyboard = () => {

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('b4');

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return(
    <Piano 
    noteRange={{first:firstNote, last: lastNote}}
    playNote={(midiNumber:string)=>{}}
    stopNote={(midiNumber:string)=>{}}
    width={1000}
    keyboardShortcuts={keyboardShortcuts}
    />
  )
}

export default Keyboard