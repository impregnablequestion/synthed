type SliderProps = {
  module: keyof Settings;
  param: keyof OscParams | keyof FilterParams | keyof EnvelopeParams | keyof GeneralParams;
  min: number;
  max: number;
  step: number;
}
