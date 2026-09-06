function NumberInput({ guess, setGuess, onGuess, disabled }) {
  return (
    <div className="input-area">
      <input
        type="number"
        placeholder="Escribe un número"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={disabled}
      />
      <button onClick={onGuess} disabled={disabled}>
        Adivinar
      </button>
    </div>
  );
}

export default NumberInput;