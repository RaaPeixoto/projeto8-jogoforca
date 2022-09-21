import React from "react";

import words from "./Words";
import forca0 from "./assets/images/forca0.png";
import forca1 from "./assets/images/forca1.png";
import forca2 from "./assets/images/forca2.png";
import forca3 from "./assets/images/forca3.png";
import forca4 from "./assets/images/forca4.png";
import forca5 from "./assets/images/forca5.png";
import forca6 from "./assets/images/forca6.png";

export default function App() {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const disabled = "letter disabled"
  const abled ="letter abled"
  const [classLetter, setClass] = React.useState(disabled);
  const [word, setWord] = React.useState("");

  function Forca() {
    //imagem da forca
    const hangmanImages = [
      forca0,
      forca1,
      forca2,
      forca3,
      forca4,
      forca5,
      forca6,
    ]; // 0 erros posição 0, 1 erro posição 1, etc
    
    function drawWord() {
      let sortWord = words.sort(() => Math.random() - 0.5);
      let choosenWord = sortWord[0];
      choosenWord = choosenWord.split("");
      let wordItem = choosenWord.map((w, index) => <div key={index}> _ </div>);
      setWord(wordItem);
      setClass (abled)
    }

    return (
      <div className="hangman">
        <img src={hangmanImages[0]} alt="Hangman Game" />
        <div className="right">
          <div className="choose-button" onClick={drawWord}>
            {" "}
            Escolher Palavra
          </div>
          <div className="choosen-word">{word}</div>
        </div>
      </div>
    );
  }

  function Letters(props) {
    function selectLetter(l){
      setClass (disabled)

    } 
   
   
    return (
      <div className={classLetter} onClick={selectLetter}> {props.letter.toUpperCase()} </div> // letter vira abled e disabled
    );
  }

  function GuessAnswer() {
    return (
      <div className="guess-answer">
        <p> Já sei a palavra</p>
        <input></input>
        <div className="guess"> Chutar </div>
      </div>
    );
  }
  return (
    <div className="game">
      <Forca />
      <div className="letters">
        {alphabet.map((l, index) => (
          <Letters letter={l} key={index} />
        ))}
      </div>
      <GuessAnswer />
    </div>
  );
}
