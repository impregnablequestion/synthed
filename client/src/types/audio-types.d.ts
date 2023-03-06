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

type Params = keyof FilterParams | keyof OscParams | keyof GeneralParams | keyof EnvelopeParams


type Settings = {
  id: number,
  name: string,
  tags: string,
  osc: OscParams,
  filter: Filter,
  envelope: Envelope,
  general: GeneralParams
}