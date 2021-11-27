// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
//If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
  function caesar(input, shift, encode = true) {
    if (!shift || shift ===0 || shift < -25 || shift > 25){
      return false ;
    }
    
// set the direction of the shift if encoding or decoding
    if (encode) {
      shift *=1;
    }else {
      shift *=-1;
    }
    
//If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").     
    let inputArray = inputToArrayOfCharacters(input);
    const codeMessage = inputArray.map((character) => {
      let shiftedIndex = alphabet.indexOf(character) + shift;
      
      if (shiftedIndex > 25) {
        shiftedIndex -= 26;
      }
      if (shiftedIndex < 0) {
        shiftedIndex +=26;
      }
      if (character === " " || !alphabet.includes(character)) {
        return character;
      }
      character = alphabet[shiftedIndex];
      return character
    });
    return codeMessage.join("");
  }
  
// changes the input into an array of characters and makes all characters lowercase
    function inputToArrayOfCharacters(input) {
      let inputArray = [];
      for (let i = 0; i < input.length; i++) {
        let lowercase = input[i].toLowerCase();
        inputArray.push(lowercase);
      }
      return inputArray;
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
