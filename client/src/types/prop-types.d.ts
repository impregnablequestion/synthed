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

type XYProps = {
  xModule: keyof Settings | false;
  xParam: Params | false;
  xMin: number;
  xMax: number;
  yModule: keyof Settings | false;
  yParam: Params | false;
  yMin: number;
  yMax: number;
  note: number;
}

type NoteButtonProps = {
  note: number;
}

type KeyboardProps = {
  first: string;
  last: string;
}
