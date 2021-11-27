// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function checkDuplicates(input="string"){
    let inputArray = input.split([])
    let holder = []
    for(let i = 0; i < inputArray.length;i++){
      let val = false 
      for(let j = 0; j < holder.length; j++){
        if (input[i] == holder[j]){
          val = true
          return true
        }
      }
      if(!val){
        holder.push(input[i])
      }
    }
    return false
  }
  

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase()
    let isDuplicate = checkDuplicates(alphabet)
    if (isDuplicate){return false}
    const letters = "abcdefghijklmnopqrstuvwxyz".split([])
    if (!alphabet ||alphabet.length != 26){return false}
    let splitAlphabet = alphabet.split([])
    if (encode){
      let holder = ''
      for (let key = 0; key < input.length; key++){
        if (input[key]== " "){
          holder += " "
          key++
        }
        let index = letters.indexOf(input[key])
        holder += alphabet[index]
      }
      return holder
    }
    if (!encode){
      let holder = ''
      for (let i = 0; i < input.length; i++){
         if (input[i]== " "){
          holder += " "
          i++
        }
        let index = alphabet.indexOf(input[i])
        holder += letters[index]
      }
      return holder
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
