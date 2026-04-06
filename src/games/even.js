import runEngine from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const getGameData = () => {
  const question = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => runEngine(description, getGameData)
