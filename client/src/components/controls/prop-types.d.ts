type SliderProps = {
  module: keyof Settings;
  param: Params;
  min: number;
  max: number;
  step: number;
}

type ChapterProps = {
  next: string;
}
