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

const isValid = (char, validChars) => {
        if (!validChars.includes(char)) {
            return false
        }
        
    return true
}

const addFieldValidation = (field, allowedArray) => {
    if (!field || !allowedArray) {
        return
    }

    field.addEventListener('input', (e) => {
        const lastChar = e.data // The last character typed
        console.log(e)
        alert(JSON.stringify(e, null, 4))

        if (!lastChar || isValid(lastChar, allowedArray)) {
            return // If valid or empty (e.g., after Backspace), do nothing
        } else {
            field.value = field.value.slice(0, -1) // Remove invalid character
            e.preventDefault()
        }
    })

    field.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'Backspace' || e.key === 'Enter') {
            return // Allow these keys
        }

        if (!isValid(e.key, allowedArray)) {
            e.preventDefault() // Prevent default for invalid keys
        }
    })
}

const initValidation = () => {
    addFieldValidation(nameInput, alphaSpace)
    addFieldValidation(cityInput, alphaSpace)
    addFieldValidation(phoneInput, num)
    addFieldValidation(ypocInput, alphaNumSpaceSpec)
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Custom validation initiated')
    initValidation()
})