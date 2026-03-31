import runEngine from '../index.js';

const description = 'What is the result of the expression?';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGameData() {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const operator = operators[randomIndex];

  const question = num1 + ' ' + operator + ' ' + num2;

  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }

  const correctAnswer = String(result);

  return [question, correctAnswer];
}

function startCalcGame() {
  runEngine(description, getGameData);
}

export default startCalcGame;

