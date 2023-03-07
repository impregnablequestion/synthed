import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import { Text, Play, Chapter } from '../chapterStyles'
import { preset1 } from '../../../app/synth_engine/presets';
import Keyboard from '../../controls/Keyboard';
import { EnvelopeParam, EnvelopeParams } from '../../play_components/Envelope';
import VertSlider from '../../controls/VerticalSlider';
import BottomNav from '../../BottomNav';

const Three4 = ({ next, nextLabel }: ChapterProps) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(load_preset(preset1))
  }, [dispatch])

  return (
    <Chapter>
      <Text>
        <h2>3-4: Putting it together!</h2>
        <p>Now try using all four envelope settings in combination to
          sculpt your sound!
        </p>
      </Text>
      <Play>
        <EnvelopeParams>
          <EnvelopeParam>
            <VertSlider module='envelope' param='attack' min={0.005} max={1} step={0.005} />
            <p>Attack</p>
          </EnvelopeParam>
          <EnvelopeParam>
            <VertSlider module='envelope' param='decay' min={0.005} max={1} step={0.005} />
            <p>Decay</p>
          </EnvelopeParam>
          <EnvelopeParam>
            <VertSlider module='envelope' param='sustain' min={0.005} max={1} step={0.005} />
            <p>Sustain</p>
          </EnvelopeParam>
          <EnvelopeParam>
            <VertSlider module='envelope' param='release' min={0.1} max={8} step={0.005} />
            <p>Release</p>
          </EnvelopeParam>
        </EnvelopeParams>
        <Keyboard first="c4" last="g4" width={300} />
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel} />
    </Chapter>
  )
}

export default Three4