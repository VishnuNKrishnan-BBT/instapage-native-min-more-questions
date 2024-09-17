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

const form = Array.from(document.getElementsByTagName('form'))[0]
const nameInput = Array.from(document.getElementsByTagName('form'))[0][0]
const cityInput = Array.from(document.getElementsByTagName('form'))[0][1]
const phoneInput = document.getElementById('field-d872567810e8715db83b28f3073eae71-2')
const emailInput = Array.from(document.getElementsByTagName('form'))[0][5]
const ypocInput = Array.from(document.getElementsByTagName('form'))[0][6]
const countryCodeInput = Array.from(document.getElementsByTagName('form'))[0][7]
const submitBtn = document.getElementById('field-d872567810e8715db83b28f3073eae71-4')

function checkBlankInput() {
    //Return true if there are blank inputs
    if(
        nameInput.value == '' ||
        cityInput.value == '' ||
        phoneInput.value == '' ||
        emailInput.value == '' ||
        ypocInput.value == ''
    ){
        return true
    }else{
        return false
    }
}

function markBlankFields() {
    console.log('marking blanks')
    if(nameInput.value == ''){
        nameInput.style.border = '1px solid tomato'
    }else{
        nameInput.style.border = '1px solid white'
    }
    if(cityInput.value == ''){
        cityInput.style.border = '1px solid tomato'
    }else{
        cityInput.style.border = '1px solid white'
    }
    if(phoneInput.value == ''){
        phoneInput.style.border = '1px solid tomato'
    }else{
        phoneInput.style.border = '1px solid white'
    }
    if(emailInput.value == ''){
        emailInput.style.border = '1px solid tomato'
    }else{
        emailInput.style.border = '1px solid white'
    }
    if(ypocInput.value == ''){
        ypocInput.style.border = '1px solid tomato'
    }else{
        ypocInput.style.border = '1px solid white'
    }
}

function handleInput(event, allowedChars, maxLength = 128) {
    const field = event.target
    const value = field.value
    let filteredValue = ''

    for (let char of value) {
        if (allowedChars.includes(char) && filteredValue.length <= maxLength) {
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
    // form.addEventListener('submit', e => {
    //     if(checkBlankInput() == true){
    //         e.preventDefault() //Do not submit
    //         markBlankFields()
    //     }else{
    //         null
    //     }
    // })

    nameInput.addEventListener('input', e => {
        handleInput(e, alphaSpace)
    })
    cityInput.addEventListener('input', e => {
        handleInput(e, alphaSpace)
    })
    phoneInput.addEventListener('input', e => {
        handleInput(e, num, 15)
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
