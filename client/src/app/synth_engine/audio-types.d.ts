type Waveform = "sine" | "triangle" | "square" | "sawtooth"
type FilterType = "lowpass" | "highpass" | "bandpass" | "notch"

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

type GeneralParams = {
  voices: number,
  octave: number,
  master_gain: number
}

type Params = keyof FilterParams | keyof OscParams | keyof FilterParams | keyof EnvelopeParams


type Settings = {
  osc: OscParams,
  filter: Filter,
  envelope: Envelope,
  general: GeneralParams
}