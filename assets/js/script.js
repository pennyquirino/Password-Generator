const characterAmtRange = document.getElementById("characterAmtRange")
const characterAmtNumber = document.getElementById("characterAmtNumber")
const includeUppercase = document.getElementById("includeUppercase")
const includeNumber = document.getElementById("includeNumber")
const includeSymbol = document.getElementById("includeSymbol")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("passwordDisplay")

// create an array using ASCII char codes to simplify code
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)

characterAmtNumber.addEventListener("input", syncCharacterAmount)
characterAmtRange.addEventListener("input", syncCharacterAmount)

// change the names below so as not to override the above const 

form.addEventListener("submit", e => {
    e.preventDefault()
    const characterAmt = characterAmtNumber.value
    const isIncludeUppercase = includeUppercase.checked
    const isIncludeNumber = includeNumber.checked
    const isIncludeSymbol = includeSymbol.checked
    const password = generatePassword(characterAmt, isIncludeUppercase, isIncludeNumber, isIncludeSymbol)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmt, isIncludeUppercase, isIncludeNumber, isIncludeSymbol) {
    
    let charCodes = LOWERCASE_CHAR_CODES;

    if (isIncludeUppercase) {
        charCodes = charCodes.concat (UPPERCASE_CHAR_CODES);
    }
    if (isIncludeNumber) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
    if (isIncludeSymbol) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)
    
     const passwordCharacters = []
     for (let i = 0; i < characterAmt; i++) {
         //Google Search: how to get a random index in an array javascript
         //using characterAmt was only using the first 10 digits. Length uses the length of charCodes
         //https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
         //const characterCode = charCodes[Math.floor(Math.random() * characterAmt)]
         const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))

     }
     return passwordCharacters.join("")
    console.log (charCodes)
}
    // create a function for the array of charCodes to be used 
function arrayFromLowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array 
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmtRange.value = value
    characterAmtNumber.value = value
}

  