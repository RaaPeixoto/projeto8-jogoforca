export default function Letters(props) {
    const {index, selectedLetter, disabled, classLetter,alphabet,incorrectLetters,setIncorrectLetters,lose,setSelectedLetter,word,replace,correctLetters,setCorrectLetters,win}=props

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
   let numberCorrectLetters= word.filter(l=> replace(l)===letter).length;
   console.log(numberCorrectLetters)
  numberCorrectLetters>0?console.log("") //filtra a array de word para saber se possui a letra
  : incorrectLetter(letter);
 
  let newCorrectLetters = correctLetters+numberCorrectLetters
  setCorrectLetters(newCorrectLetters)
  if(newCorrectLetters===word.length){
   win()
  }
  }

  return (
    <div
      className={
        selectedLetter.includes(alphabet[index])
          ? disabled
          : classLetter
      }
      onClick={() => selectLetter(index)}
    >
      {" "}
      {props.letter.toUpperCase()}{" "}
    </div> 
  );
}