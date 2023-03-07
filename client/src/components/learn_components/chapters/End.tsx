import React from 'react'
import { Text, Play, Chapter } from "../chapterStyles";
import BottomNav from '../../BottomNav';

const End = ({next, nextLabel}: ChapterProps) => {

  return (
    <Chapter>
      <Text>
        <p>Congrats, you've made it through all the lessons! Make your way over to the play view 
          to put your new synthesizer knowledge into practice!
        </p>
      </Text>
      <Play>
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}

export default End