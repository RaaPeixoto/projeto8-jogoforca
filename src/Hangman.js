
export default function Hangman(props) {
  const { hangmanImages, incorrectLetters, word, words, colorWord, selectedLetter, hiddenLetter, replace, reset, setInputIsDisabled, setClass, abled, setWord } = props
  //FUNÇÃO SORTEAR PALAVRA
  function drawWord() {
    reset();
    setInputIsDisabled(false)
    let sortWord = words.sort(() => Math.random() - 0.5);
    let choosenWord = sortWord[0];
    choosenWord = choosenWord.split("");
    setClass(abled);
    setWord(choosenWord);
  }
  return (
    <div className="hangman">
      <img src={hangmanImages[incorrectLetters]} alt="Hangman Game" />
      <div className="right">
        <div className="choose-button" onClick={drawWord}>

          Escolher Palavra
        </div>
        <div className="choosen-word">
          {word.map((w, index) => (
            <div key={index} className={colorWord}>
              {selectedLetter.includes(replace(w))
                ? w
                : hiddenLetter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}