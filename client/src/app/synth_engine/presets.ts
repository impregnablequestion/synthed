const preset1: Settings = {
  id: 0,
  name: "preset 1",
  tags: "",
  osc: {
    wave: "triangle",
    coarse_tune: 0,
    fine_tune: 0,
    gain: 1
  },
  filter: {
    frequency: 15000,
    type: "lowpass",
    q: 0.1
  },
  envelope: {
    attack: 0.001,
    decay: 0.05,
    sustain: 0.4,
    release: 0.6,
  },
  general: {
    voices: 4,
    octave: 0,
    master_gain: 1
  }
}

const preset2: Settings = {
  id: 2,
  name: "preset2",
  tags: "",
  osc: {
    wave: "square",
    coarse_tune: 0,
    fine_tune: 0,
    gain: 1
  },
  filter: {
    frequency: 15000,
    type: "lowpass",
    q: 0.1
  },
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.8,
    release: 0.5,
  },
  general: {
    voices: 4,
    octave: 0,
    master_gain: 0.6
  }
}

export {preset1, preset2}
