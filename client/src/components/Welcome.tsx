import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LogSlider from './controls/LogSlider';
import NoteButton from './controls/NoteButton';

const Welcome = () => {

  const navigate = useNavigate();

  return (
    <div>
      <p>hi! welcome to...</p>
      <h1>synthed</h1>
      <p>this is a <Sp>synth ed</Sp>ucation website</p>
      <p>step by step, you can learn how a synthesizer works, <br/>and put it into practice at the end in the play view!</p>
      <p>would you like to....</p>
      <LogSlider module='general' param='master_gain' min={0.001} max={1} step={0.001}/>
      <LogSlider module='filter' param='frequency' min={20} max={20000} step={10}/>
      <NoteButton note={55}/>
      <OptionsContainer>
        <Button color="secondary" variant="contained" onClick={()=>{navigate("/learn/1")}} disableElevation size='large'>learn</Button>
        <Button color="warning"variant="contained" onClick={()=>{navigate("/play")}} disableElevation size='large'>play</Button>
      </OptionsContainer>
    </div>
  )
}

export default Welcome

const OptionsContainer = styled.div`
  display:flex;
  justify-content: space-around;
  padding: 10rem;
`

const Sp = styled.span`
  font-weight: 700;
  color: green
`