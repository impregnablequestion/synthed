import BottomNav from '../../BottomNav';
import XY from '../../controls/XY';
import { Text, Play, Chapter } from '../chapterStyles'

const One1 = ({ next, nextLabel }: ChapterProps) => {

  return (
    <Chapter>
      <Text>
        <h2>1-1: Oscillators</h2>
        <p>In spite of being a long word, an Oscillator is simply something that generates sound. <br />They are the main building blocks of most synthesizers:
          in many ways an Oscillator can be considered a synthesizer all on its own!</p>
        <p>Click this square to make some sound!</p>
      </Text>
      <Play>
        <XY
          xModule={"osc"} xParam={"coarse_tune"} xMin={-24} xMax={24}
          yModule={"osc"} yParam={"gain"} yMin={0} yMax={1}
          note={38}
        />
      </Play>
      <BottomNav next={next} nextLabel={nextLabel} />
    </Chapter>
  )
}


export default One1