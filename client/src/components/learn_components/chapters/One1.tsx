import { useNavigate } from 'react-router'
import XY from '../../controls/XY';
import { Text, Nav, Play, Chapter } from '../chapterStyles'

const One1 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();

  return (
    <Chapter>
      <Text>
        <h2>1-1: Oscillators</h2>
        <p>In spite of being a long word, an Oscillator is simply something that generates sound. <br />They are the main building blocks of most synthesizers:
          in many ways an Oscillator can be considered a synthesizer all on its own!</p>
        <p></p>
      </Text>
      <Play>
        <p>Click this square to make some sound!</p>
        <p>(adjust the master volume slider to your liking!)</p>
        <XY
          xModule={"osc"} xParam={"coarse_tune"} xMin={-24} xMax={24}
          yModule={"osc"} yParam={"gain"} yMin={0} yMax={1}
          note={38}
        />
      </Play>
      <Nav>
        <button onClick={() => navigate(next)}>next: frequency</button>
      </Nav>
    </Chapter>
  )
}


export default One1