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
  const [inputIsDisabled,setInputIsDisabled] = useState(true)
  function reset() {
    setWordGuess("");
    setColorWord("");
    setIncorrectLetters(0);
    setClass(disabled);
    setSelectedLetter([]);
    setCorrectLetters(0);
    setInputIsDisabled(false);
  }
  function incorrectLetter() {
    setIncorrectLetters(incorrectLetters + 1);
    console.log(incorrectLetters);
    if (incorrectLetters >= 5) {
      setColorWord("incorrect");
      setSelectedLetter(alphabet);
    }
  }

  //FUNÇÃO SELECIONAR LETRA
  function selectLetter(index) {
    /*  if(!selectedLetter.includes(alphabet[index])&&classLetter!== disabled){ */ // NÃO PRECISA MAIS POIS COLOQUEI NO STYLE  pointer-events: none;
    const newSelectedLetter = [...selectedLetter, alphabet[index]];
    setSelectedLetter(newSelectedLetter);
    console.log(selectedLetter);
    console.log(word);
    word.includes(alphabet[index])? console.log("")
      : incorrectLetter(alphabet[index]);
    /* } */

  let compareLetter = (word.filter(x => x.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === alphabet[index])).length
  compareLetter=correctLetters+compareLetter
  setCorrectLetters(compareLetter)
  if(compareLetter===word.length){
   win()
  }
  }
 

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

  function Forca() {
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
                {selectedLetter.includes(w.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
                  ? w
                  : hiddenLetter}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function Letters(props) {
    return (
      <div
        className={
          selectedLetter.includes(alphabet[props.index])
            ? disabled
            : classLetter
        }
        onClick={() => selectLetter(props.index)}
      >
        {" "}
        {props.letter.toUpperCase()}{" "}
      </div> // letter vira abled e disabled
    );
  }

  function compareWord(compare, arrayWordAnswer) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === arrayWordAnswer[i]) {
        compare++;
      } else {
        lose()
      }
    }
    if (compare === word.length) {
     win()
    }
  }
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

 function win(){
  setColorWord("correct");
  setSelectedLetter(alphabet);
  setInputIsDisabled (true);
  setInputIsDisabled (true);
 }
 function lose(){
  setColorWord("incorrect");
  setSelectedLetter(alphabet);
  setIncorrectLetters(6);
  setInputIsDisabled (true);
 }

  function GuessAnswer() {
    return (
      <div className="guess-answer">
        <p> Já sei a palavra</p>
        <input
        placeholder="Digite a palavra"
        disabled = {inputIsDisabled}
          autoFocus
          onChange={(e) => setWordGuess(e.target.value)}
          value={guessWordAnswer}
          onKeyPress={(e) =>
            e.key === "Enter" ? guessWord(): null
          }
        />
        <div className="guess" onClick={guessWord}>
          {" "}
          Chutar{" "}
        </div>
      </div>
    );
  }
  return (
    <div className="game">
      <Forca />
      <div className="letters">
        {alphabet.map((l, index) => (
          <Letters letter={l} key={index} index={index} />
        ))}
      </div>
      <GuessAnswer />
    </div>
  );
}
