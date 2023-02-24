# synthed

## Idea

• To make a web application that serves as an educational tool for learning basic sound synthesis techniques, with responsive UI and sound that is helpful in illustrating the basic principles of using a subtractive synthesiser

• Heavily inspired by https://learningsynths.ableton.com, a website with a similar concept. Aiming to make a website that has sonic and visual interactive elements that can be an approachable resource for beginners in the field

• The application will make use of the Web Audio API for the sound engine, and the educational content will consist of a sequence of UI layers that act as a visual wrapper for individual parameters of the sound engine, that take the user through the steps of synthesising sound one at a time

• Once the user has completed the educational segment they are free to move onto a screen where they can create, load, update, and delete presets for the in-browser synthesiser.

## MVP

• In-browser synthesizer with a single oscillator, filter, ADSR envelope, and LFO, provided client-side by the Web Audio API

• React/Redux/TypeScript client-side program that allows for interaction with in-browser synthesiser and manages complicated state of the synthesiser across the web application, and can make calls to back-end API.

• Working back-end with Spring Boot and Postgres, enabling CRUD for PRESET and USER objects

• Educational flow sequence which explains all 4 core elements (oscillator, filter, envelope, and LFO) in a step-by-step fashion

• Play screen in which the user can play, program and save presets for the the synthesizer

## Extensions

• Add more modules to the synthesizer (more oscillators, lfo's, envelopes, delay, distortion and reverb effects, flexible routing). Synthesizer should be designed to be extensible and maintainable

• Undo/redo function making use of Redux's immutable state functionality

• Responsive animations in the educational view which relate to the concepts being explained, also audio visualisation. Potential to integrate P5.js to code those animations

• Flesh out user functionality, allow users to favourite each others presets for example? Give presets tags so that they are searchable

## Advanced Extensions

• Authentication layer connected to the Users page

• Incorporate media responsivity

• Deploy???