const preset1: Settings = {
  osc: {
    wave: "sine",
    coarse_tune: 0,
    fine_tune: 0,
    gain: 0
  },
  filter: {
    frequency: 15000,
    type: "lowpass",
    q: 0
  },
  envelope: {
    attack: 0.1,
    decay: 0.05,
    sustain: 0.4,
    release: 0.6,
  },
  global: {
    voices: 4,
    octave: 0,
    master_gain: 0.6
  }
}

const preset2: Settings = {
  osc: {
    wave: "triangle",
    coarse_tune: 0,
    fine_tune: 0,
    gain: 0
  },
  filter: {
    frequency: 15000,
    type: "lowpass",
    q: 0
  },
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.8,
    release: 0.5,
  },
  global: {
    voices: 4,
    octave: 0,
    master_gain: 0.6
  }
}

export {preset1, preset2}
