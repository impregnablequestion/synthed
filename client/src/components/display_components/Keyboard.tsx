import React from 'react'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import "react-piano/dist/styles.css"

// TODO: Wire keyboard up to audio engine

interface KeyboardProps {
  playNote: (midiNumber: number) => void;
  stopNote: (midiNumber: number) => void;
}

const Keyboard = ({playNote, stopNote}: KeyboardProps) => {

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f4');

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const handlePlayNote = (midiNumber: number) => {
    playNote(midiNumber);
  }

  const handleStopNote = (midiNumber: number) => {
    stopNote(midiNumber);
    
  }

  return(
    <Piano 
    noteRange={{first:firstNote, last: lastNote}}
    playNote={handlePlayNote}
    stopNote={handleStopNote}
    width={1000}
    keyboardShortcuts={keyboardShortcuts}
    />
  )
}

export default Keyboard