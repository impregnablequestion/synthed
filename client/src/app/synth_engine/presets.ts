const preset1: Preset = {
  osc_settings: {
    wave: "sine",
    coarse_tune: 0,
    fine_tune: 0,
    gain: 0
  },
  filter_settings: {
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
  voices: 4
}

export {preset1}
