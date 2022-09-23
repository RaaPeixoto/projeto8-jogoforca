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
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const disabled = "letter disabled"
  const abled ="letter abled"
  const [selectedLetter,setSelectedLetter] = React.useState([]);
  const [classLetter, setClass] = React.useState(disabled); 
  const [incorrectLetters,setIncorrectLetters] =React.useState(0); 
  const hiddenLetter = "_"
  const [colorWord,setColorWord] =React.useState(""); 

/*   const [wordLetter,setWordLetter] = React.useState(hiddenLetter); */
  const [word,setWord] = React.useState([]);

function incorrectLetter (){
setIncorrectLetters(incorrectLetters+1)
  console.log(incorrectLetters)
  if (incorrectLetters >=5){
    setColorWord ("incorrect")
    setSelectedLetter(alphabet)
  }
  
}

  //FUNÇÃO SELECIONAR LETRA
  function selectLetter(index){
  if(!selectedLetter.includes(alphabet[index])&&classLetter!== disabled){
    const newSelectedLetter = [...selectedLetter,alphabet[index]]
    setSelectedLetter (newSelectedLetter)
    console.log (selectedLetter)
    console.log(word)
    word.includes(alphabet[index])? correctLetter(index): incorrectLetter(alphabet[index])
}
function correctLetter(idx){
  console.log("sim")
 /*  setWordLetter (idx)
  console.log(wordLetter) */
}

} 
//FUNÇÃO SORTEAR PALAVRA
function drawWord() {
  let sortWord = words.sort(() => Math.random() - 0.5);
  let choosenWord = sortWord[0];
  choosenWord = choosenWord.split("");
  setClass (abled);
  setWord(choosenWord);
}


  function Forca() {
      

    return (
      <div className="hangman">
        <img src={hangmanImages[incorrectLetters]} alt="Hangman Game" />
        <div className="right">
          <div className="choose-button" onClick={drawWord}>
            {" "}
            Escolher Palavra
          </div>
          <div className="choosen-word">{word.map((w, index) => <div key={index} letter={w} className={colorWord}> {selectedLetter.includes(w)? w : hiddenLetter}</div>)}</div>
        </div>
      </div>
    );
  }

  function Letters(props) {
   
    return (
      <div className={selectedLetter.includes(alphabet[props.index]) ? disabled : classLetter} onClick = {()=> selectLetter(props.index)}> {props.letter.toUpperCase()} </div> // letter vira abled e disabled
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
          <Letters letter={l} key={index} index={index}/>
        ))}
      </div>
      <GuessAnswer />
    </div>
  );
}
