const createNewOscillator = (context: AudioContext, type: OscillatorType, frequency: number) => {
    const newOsc = context.createOscillator();
    newOsc.type = type;
    newOsc.frequency.value = frequency;
    const gain = context.createGain();
    newOsc.connect(gain).connect(context.destination);
    newOsc.start();
    setTimeout(()=>{
      newOsc.stop();
    }, 1000)
}

export default createNewOscillator;