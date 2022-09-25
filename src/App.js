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

  const disabled = "letter disabled";
  const abled = "letter abled";
  const [selectedLetter, setSelectedLetter] = useState([]);
  const [classLetter, setClass] = useState(disabled);
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
    setClass(disabled);
    setSelectedLetter([]);
    setCorrectLetters(0);
    setInputIsDisabled(false);
  }

  function replace (string){
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }
 /*  function incorrectLetter() {
    setIncorrectLetters(incorrectLetters + 1);
    console.log(incorrectLetters);
    if ((incorrectLetters + 1) === 6) {
      lose()
    }
  }

  //FUNÇÃO SELECIONAR LETRA
  function selectLetter(index) {
    let letter = alphabet[index]
    const newSelectedLetter = [...selectedLetter, letter];
    setSelectedLetter(newSelectedLetter);
    console.log(selectedLetter);
    console.log(word);
   let numberCorrectLetters= word.filter(l=> replace(l)===letter).length;
   console.log(numberCorrectLetters)
  numberCorrectLetters>0?console.log("") //filtra a array de word para saber se possui a letra
  : incorrectLetter(letter);
 
  let newCorrectLetters = correctLetters+numberCorrectLetters
  setCorrectLetters(newCorrectLetters)
  if(newCorrectLetters===word.length){
   win()
  }
  } */



 

  return (
    <div className="game">
      <Hangman hangmanImages= {hangmanImages} incorrectLetters={incorrectLetters}  word={word} words={words} colorWord={colorWord} selectedLetter={selectedLetter} hiddenLetter={hiddenLetter} replace= {replace} reset={reset} setInputIsDisabled={setInputIsDisabled} setClass={setClass} abled={abled} setWord={setWord}/>
      <div className="letters">
        {alphabet.map((l, index) => (
          <Letters letter={l} key={index} index={index} selectedLetter={selectedLetter} disabled={disabled} classLetter={classLetter} alphabet={alphabet} incorrectLetters = {incorrectLetters} setIncorrectLetters={setIncorrectLetters} lose={lose} setSelectedLetter={setSelectedLetter} word={word} replace={replace} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} win={win}/>
        ))}
      </div>
      <GuessAnswer word= {word} inputIsDisabled= {inputIsDisabled} guessWordAnswer={guessWordAnswer} setWordGuess={setWordGuess} lose={lose} win={win} replace={replace}/>
    </div>
  );
}

