import styled from 'styled-components';
export default function Hangman(props) {
  const { hangmanImages, incorrectLetters, word, words, colorWord, selectedLetter, hiddenLetter, replace, reset, setInputIsDisabled, setButtonLetter, abled, setWord } = props
  //FUNÇÃO SORTEAR PALAVRA
  function drawWord() {
    reset();
    setInputIsDisabled(false)
    let sortWord = words.sort(() => Math.random() - 0.5);
    let choosenWord = sortWord[0];
    choosenWord = choosenWord.split("");
    setButtonLetter(abled);
    setWord(choosenWord);
  }
  return (
    <HangmanGame > 
      <img src={hangmanImages[incorrectLetters]} alt="Hangman Game" data-identifier='game-image'/>
      <WordDiv>
        <ChooseButton onClick={drawWord} data-identifier='choose-word'>

          Escolher Palavra
        </ChooseButton>
        <ChoosenWord colorWord= {colorWord} data-identifier='word'>
          {word.map((w, index) => (
            <div key={index} >
              {selectedLetter.includes(replace(w))
                ? w
                : hiddenLetter}
            </div>
          ))}
        </ChoosenWord >
      </WordDiv>
    </HangmanGame>
  );
}

const HangmanGame = styled.div`
  display: flex;
  width: 900px;
  img{
    margin-top:10px;
    width: 400px;
    height:fit-content;
  }
`

const WordDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width:50%;
`

const ChooseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28ae60;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 800;
  margin-top: 50px;
  cursor: pointer;
  
`


const ChoosenWord= styled.div `
  display: flex;
  margin-top: 400px;
  div{
  margin-right: 10px;
  font-size: 50px;
  font-weight:900;
  color: ${props=> props.colorWord === "correct"? "green" : props.colorWord ==="incorrect"? "red" : "black"}
  }

`
