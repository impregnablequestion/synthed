const midiToFreq = (note: number) => {
  const tuning = 440;
  return (tuning/32) * (2 ** ((note-9)/12));
}

export {midiToFreq}