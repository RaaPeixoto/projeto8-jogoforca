export default function GuessAnswer(props) {
    const { word, inputIsDisabled, guessWordAnswer,  setWordGuess, lose, win, replace} = props

    function guessWord() {
        let arrayWordAnswer = guessWordAnswer.toLowerCase();
        arrayWordAnswer = arrayWordAnswer.split("");
        console.log("arrayyyy", arrayWordAnswer);
        console.log("word", word);
        let compare = 0;
        if (word.length === arrayWordAnswer.length) {
          compareWord(compare, arrayWordAnswer);
        } else {
          lose()
        
        }
        setWordGuess("");
      }


  function compareWord(compare, arrayWordAnswer) {
    for (var i = 0; i < word.length; i++) {
      if (replace(word[i]) === replace(arrayWordAnswer[i])) {
        compare++;
      } else {
        lose()
      }
    }
    if (compare === word.length) {
     win()
    }
  }
    return (
        <div className="guess-answer">
            <p> Já sei a palavra</p>
            <input
                placeholder="Digite a palavra"
                disabled={inputIsDisabled}
                autoFocus
                onChange={(e) => setWordGuess(e.target.value)}
                value={guessWordAnswer}
                onKeyPress={(e) =>
                    e.key === "Enter" ? guessWord() : null
                }
            />
            <div className="guess" onClick={guessWord}>
                {" "}
                Chutar{" "}
            </div>
        </div>
    );
}