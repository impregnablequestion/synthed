import React from 'react'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import "react-piano/dist/styles.css"
import { useAppDispatch } from '../../app/hooks';
import { play_note, stop_note } from '../../features/synthSlice';

// TODO: Wire keyboard up to audio engine


const Keyboard = () => {

  const dispatch = useAppDispatch();

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('e4');

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const handlePlayNote = (midiNumber: number) => {
    dispatch(play_note(midiNumber));
  }

  const handleStopNote = (midiNumber: number) => {
    dispatch(stop_note(midiNumber));

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