import { useState } from 'react';
import NumberInput from './NumberInput.jsx';
import FeedbackMessage from './FeedbackMessage.jsx';
import AttemptsCounter from './AttemptsCounter.jsx';

function Game() {
  const [secretNumber, setSecretNumber] = useState(() =>
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const num = Number(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setFeedback('⚠️ Ingresa un número entre 1 y 100');
      return;
    }

    setAttempts(attempts + 1);

    if (num === secretNumber) {
      setFeedback('🎉 ¡Correcto! Has adivinado el número.');
      setGameOver(true);
    } else if (num < secretNumber) {
      setFeedback('📈 Muy bajo, intenta con un número más alto.');
    } else {
      setFeedback('📉 Muy alto, intenta con un número más bajo.');
    }

    setGuess('');
  };

  const handleReset = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <NumberInput
        guess={guess}
        setGuess={setGuess}
        onGuess={handleGuess}
        disabled={gameOver}
      />
      <FeedbackMessage feedback={feedback} />
      <AttemptsCounter attempts={attempts} />
      {gameOver && <button onClick={handleReset}>🔄 Jugar de nuevo</button>}
    </div>
  );
}

export default Game;