type Waveform = "sine" | "triangle" | "square" | "sawtooth"
type FilterType = "lowpass" | "highpass"

type EnvelopeParams = {
  attack: number,
  decay: number,
  sustain: number,
  release: number,
}

type FilterParams = {
  frequency: number,
  type: FilterType,
  q: number
}

type OscParams = {
  wave: Waveform,
  gain: number,
  coarse_tune: number,
  fine_tune: number,
}

type Preset = {
  osc_settings: OscParams
  filter_settings: Filter,
  envelope: Envelope,
  voices: number
}