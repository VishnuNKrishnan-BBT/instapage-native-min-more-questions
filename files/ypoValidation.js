const alphaSpace = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    ' '
]
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const alphaNumSpaceSpec = [...alphaSpace, ...num, `'`, `:`, `-`, `_`, `&`, `"`]
const allowedEmailCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '.', '_', '%', '+', '-', '@'
]


const nameInput = Array.from(document.getElementsByTagName('form'))[0][0]
const cityInput = Array.from(document.getElementsByTagName('form'))[0][1]
const phoneInput = Array.from(document.getElementsByTagName('form'))[0][2] //2, 3 and 4 are part of intl dropdown
const emailInput = Array.from(document.getElementsByTagName('form'))[0][3]
const ypocInput = Array.from(document.getElementsByTagName('form'))[0][4]
const countryCodeInput = Array.from(document.getElementsByTagName('form'))[0][5]

function handleInput(event, allowedChars) {
    const field = event.target
    const value = field.value
    let filteredValue = ''

    for (let char of value) {
        if (allowedChars.includes(char)) {
            filteredValue += char
        }
    }

    // Update the input field value with the filtered value
    field.value = filteredValue
}

function handleEmailInput(event, allowedChars) {
    const field = event.target
    const value = field.value
    let filteredValue = ''

    for (let char of value) {
        if (allowedChars.includes(char)) {
            filteredValue += char
        }
    }

    // Update the input field value with the filtered value
    field.value = filteredValue
}

const initValidation = () => {
    nameInput.addEventListener('input', e => {
        handleInput(e, alphaSpace)
    })
    cityInput.addEventListener('input', e => {
        handleInput(e, alphaSpace)
    })
    phoneInput.addEventListener('input', e => {
        handleInput(e, num)
    })
    emailInput.addEventListener('input', e => {
        handleInput(e, allowedEmailCharacters)
    })
    ypocInput.addEventListener('input', e => {
        handleInput(e, alphaNumSpaceSpec)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Custom validation initiated')
    initValidation()
})
