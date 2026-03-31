import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function getRandomNumber(min, max) {
  const number = Math.random() * (max - min + 1);
  return Math.floor(number) + min;
}

function getGcd(num1, num2) {
  let gcd = 1;
 
  for (let i = 1; i <= num1 && i <= num2; i = i + 1) {
    
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
function getGameData() {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);

  const question = number1 + ' ' + number2;
  const result = getGcd(number1, number2);
  const correctAnswer = String(result);

  return [question, correctAnswer];
}
function startGcdGame() {
  runEngine(description, getGameData);
}

export default startGcdGame;
