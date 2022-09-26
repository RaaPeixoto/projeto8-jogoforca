import styled from 'styled-components';

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
        <GuessAnswerDiv>
            <p> Já sei a palavra!</p>
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
            <Guess onClick={guessWord}>
                {" "}
                Chutar{" "}
            </Guess>
        </GuessAnswerDiv>
    );
}

const GuessAnswerDiv = styled.div `
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 800px;
  p{
    font-size: 20px;
  }
  input {
    height:30px;
    width: 300px;
  }
`
const Guess = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  color: #3b74a9;
   background-color: #e1ecf4;
   border: 2px solid #3b74a9;
   border-radius: 5px;
   font-size: 20px;
   font-weight: 900;
   cursor: pointer;
`
