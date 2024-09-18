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
const nameInput = document.getElementById('field-f7f68b243196f9ab78fb2974ff556ad9-0')
const cityInput = document.getElementById('field-f7f68b243196f9ab78fb2974ff556ad9-1')
const phoneInput = document.getElementById('field-f7f68b243196f9ab78fb2974ff556ad9-2')
const emailInput = document.getElementById('field-f7f68b243196f9ab78fb2974ff556ad9-3')
const ypocInput = document.getElementById('field-f7f68b243196f9ab78fb2974ff556ad9-4')
const countryCodeInput = document.getElementById('field-f7f68b243196f9ab78fb2974ff556ad9-5')
const submitBtn = document.getElementsByTagName('button')[1]

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

function handleEmailInput(event, allowedChars, maxLength = 128) {
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
