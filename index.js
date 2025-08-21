const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let firstPassword = document.getElementById('first-password');
let secondPassword = document.getElementById('second-password');
let passwordLength = document.getElementById('password-length')

firstPassword.addEventListener('click', function () {
    copyToClipboard("firstPass")
})
secondPassword.addEventListener('click', function () {
    copyToClipboard("secondPass")
})

function copyToClipboard(n) {
    if (n === "firstPass") {
        navigator.clipboard.writeText(firstPassword.textContent)
        console.log(firstPassword.textContent)
        alert('You copied: ' + firstPassword.textContent)
    } else {
        navigator.clipboard.writeText(secondPassword.textContent)
        console.log(secondPassword.textContent)
        alert('You copied: ' + secondPassword.textContent)
    }
}

function generatePassword() {
    let firstResult = []
    let secondResult = []
    const lengthValue = passwordLength.value
    if (lengthValue > 24) {
        alert("Password length maximum is 24! Your input: " + lengthValue)
    } else {
        for (let i = 0; i < lengthValue; i++) {
            let firstRandomize = Math.floor(Math.random() * characters.length)
            let secondRandomize = Math.floor(Math.random() * characters.length)
            firstResult.push(characters[firstRandomize])
            secondResult.push(characters[secondRandomize])
        }
    }
    firstPassword.textContent = firstResult.join('')
    secondPassword.textContent = secondResult.join('')
}



