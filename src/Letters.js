import styled from 'styled-components';

export default function Letters(props) {
  const { index, selectedLetter,  buttonLetter, alphabet, incorrectLetters, setIncorrectLetters, lose, setSelectedLetter, word, replace, correctLetters, setCorrectLetters, win } = props

  function incorrectLetter() {
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
    let numberCorrectLetters = word.filter(l => replace(l) === letter).length;
    console.log(numberCorrectLetters)
    numberCorrectLetters > 0 ? console.log("") //filtra a array de word para saber se possui a letra
      : incorrectLetter(letter);

    let newCorrectLetters = correctLetters + numberCorrectLetters
    setCorrectLetters(newCorrectLetters)
    if (newCorrectLetters === word.length) {
      win()
    }
  }

  return (
   <>{ 
      selectedLetter.includes(alphabet[index])
          ? (<LetterDisabled   data-identifier='letter'onClick={() => selectLetter(index)} > {props.letter.toUpperCase()} </LetterDisabled>)
          : (<LetterAbled  data-identifier='letter'disabled = {buttonLetter} onClick={() => selectLetter(index)}> {props.letter.toUpperCase()} </LetterAbled>)
    }</>

  )
  
}

const LetterDisabled = styled.button `
    margin-right: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height:60px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 1000;
    cursor: pointer;
    color: #79818a;
    background-color: #9faab5;
    pointer-events: none;

`

const LetterAbled= styled.button`
    margin-right: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height:60px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 1000;
    cursor: pointer;
    color: #3b74a9;;
    background-color: #e1ecf4;
    border: 2px solid #3b74a9;
    &:disabled{
    border:none;
    color: #79818a;
    background-color: #9faab5;
    }

`