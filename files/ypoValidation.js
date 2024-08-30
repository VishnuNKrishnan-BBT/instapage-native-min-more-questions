const alphaSpace = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    ' '
]
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const alphaNumSpaceSpec = [...alphaSpace, ...num, `'`, `:`, `-`, `_`, `&`, `"`]

const nameInput = Array.from(document.getElementsByTagName('form'))[0][0]
const cityInput = Array.from(document.getElementsByTagName('form'))[0][1]
const phoneInput = Array.from(document.getElementsByTagName('form'))[0][2]
const emailInput = Array.from(document.getElementsByTagName('form'))[0][3]
const ypocInput = Array.from(document.getElementsByTagName('form'))[0][4]


function handleKeyPress(event, field, allowedChars) {
    // Get the key pressed
    const keyPressed = event.key

    if(keyPressed !== 'Backspace' && keyPressed !== 'Tab' && keyPressed !== 'Enter'){
        event.preventDefault()
    }

    // Check if the key is a single character and included in the allowedCharacters array
    if (keyPressed.length === 1 && allowedChars.includes(keyPressed)) {
        // Add the character to the input field
        field.value += keyPressed
    }

    if(!allowedChars.includes(keyPressed)){
        ypocInput.value += keyPressed
    }
}

const initValidation = () => {
    nameInput.addEventListener('keydown', e => {
        handleKeyPress(e, nameInput, alphaSpace)
    })
    cityInput.addEventListener('keydown', e => {
        handleKeyPress(e, cityInput, alphaSpace)
    })
    phoneInput.addEventListener('keydown', e => {
        handleKeyPress(e, phoneInput, num)
    })
    ypocInput.addEventListener('keydown', e => {
        handleKeyPress(e, ypocInput, alphaNumSpaceSpec)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Custom validation initiated')
    initValidation()
})