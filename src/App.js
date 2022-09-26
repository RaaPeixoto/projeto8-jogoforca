import { useState } from "react";
import alphabet from "./Alphabet";
import words from "./Words";
import forca0 from "./assets/images/forca0.png";
import forca1 from "./assets/images/forca1.png";
import forca2 from "./assets/images/forca2.png";
import forca3 from "./assets/images/forca3.png";
import forca4 from "./assets/images/forca4.png";
import forca5 from "./assets/images/forca5.png";
import forca6 from "./assets/images/forca6.png";
import winImg from "./assets/images/giphy.gif"
import Hangman from "./Hangman";
import GuessAnswer from "./GuessAnswer.js";
import Letters from "./Letters";
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle"
export default function App() {
  //imagem da forca
  const hangmanImages = [
    forca0,
    forca1,
    forca2,
    forca3,
    forca4,
    forca5,
    forca6,
    winImg
  ]; // 0 erros posição 0, 1 erro posição 1, etc

  const disabled = true;
  const abled = false;
  const [selectedLetter, setSelectedLetter] = useState([]);
  const [buttonLetter, setButtonLetter] = useState(disabled);
  const [incorrectLetters, setIncorrectLetters] = useState(0);
  const hiddenLetter = "_";
  const [colorWord, setColorWord] = useState("");
  const [guessWordAnswer, setWordGuess] = useState("");
  const [word, setWord] = useState([]);
  const [correctLetters,setCorrectLetters] = useState(0);
  const [inputIsDisabled,setInputIsDisabled] = useState(true);
  function win(){
    setColorWord("correct");
    setSelectedLetter(alphabet);
    setInputIsDisabled (true);
    setIncorrectLetters(7);
   }
   function lose(){
    setColorWord("incorrect");
    setSelectedLetter(alphabet);
    setIncorrectLetters(6);
    setInputIsDisabled (true);
   }
  function reset() {
    setWordGuess("");
    setColorWord("");
    setIncorrectLetters(0);
    setButtonLetter(disabled);
    setSelectedLetter([]);
    setCorrectLetters(0);
    setInputIsDisabled(false);
  }

  function replace (string){
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }
 

  return (
    <Game>
      <Hangman hangmanImages= {hangmanImages} incorrectLetters={incorrectLetters}  word={word} words={words} colorWord={colorWord} selectedLetter={selectedLetter} hiddenLetter={hiddenLetter} replace= {replace} reset={reset} setInputIsDisabled={setInputIsDisabled} setButtonLetter={setButtonLetter} abled={abled} setWord={setWord}/>
      <LettersDiv>
        {alphabet.map((l, index) => (
          <Letters letter={l} key={index} index={index} selectedLetter={selectedLetter} buttonLetter={buttonLetter} alphabet={alphabet} incorrectLetters = {incorrectLetters} setIncorrectLetters={setIncorrectLetters} lose={lose} setSelectedLetter={setSelectedLetter} word={word} replace={replace} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} win={win}/>
        ))}
      </LettersDiv>
      <GuessAnswer word= {word} inputIsDisabled= {inputIsDisabled} guessWordAnswer={guessWordAnswer} setWordGuess={setWordGuess} lose={lose} win={win} replace={replace}/>
      <GlobalStyle />
    </Game>
  );
        }
const Game = styled.div`
  padding: 50px 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

`
const LettersDiv = styled.div `
    padding-top: 50px;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    width: 950px;
`

