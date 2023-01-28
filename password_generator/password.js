// create arrays with possible characters for the password.
const abcLower = 'abcdefghijklmnopqrstuvwxyz0123456789';

const abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const specialCharacter = '!@#$%^&?';

// this function will return the length of password chosen by user.
function runLen(){
    // get length for password
    let pwLength =document.querySelector("#passLength");
    let pwLOutput = pwLength.value;

    return pwLOutput
}

// This function will return true or false based on user chose yes or no for uppercase letters.
function runUp(){
    // check for upper case
    let upper = document.querySelector('input[name="upper"]:checked').value
    if (upper === "yes") {
        return true
    } else {
        return false
    }
    
    return upper
}

// the runSpe function returns true or false based on user chose to have special characters.
function runSpe() {
    // check for special character
    let specialCh = document.querySelector("input[name='spclC']:checked").value
    if (specialCh === "yes") {
        return true
    } else {
        return false
    }
}

// the possPw function takes two arguments true or false to add uppercase and special characters to array of possible characters for password.
function possPw(cap, sym) {
    
    let possiblePw = [];

    possiblePw += abcLower

    if (cap) {
        possiblePw += abcUpper
    } 
    if (sym) {
        possiblePw += specialCharacter
    }

    return possiblePw
}

// function mkPw takes two arguments a list and the length of the list and will post new pass word to #finishedPW.
function mkPw(list, len) {
    let pw =  [];
    for (let i = 0; i < len; i++) {
        let randomNum = Math.floor(Math.random() * list.length);
        pw += list[randomNum]
    }
    document.getElementById("finishedPW").innerHTML = pw;
}