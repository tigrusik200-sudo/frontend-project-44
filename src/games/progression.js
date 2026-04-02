import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js'; 

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = generateProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runEngine(description, generateRound);
