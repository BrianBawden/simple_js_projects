
const abcLower = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

const abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const specialCharacter = '~`! @#$%^&*()_-+={[}]|:;"\'<,>.?/'.split('');



function run(){

    let leng = runLen()
    console.log(leng)

    let up = runUp()
    console.log(up)

    let spe = runSpe()
    console.log(spe)

};

function runLen(){
    // get length for password
    let pwLength =document.querySelector("#passLength");
    let pwLOutput = pwLength.value;

    return pwLOutput
    // console.log(pwLOutput)
}

function runUp(){
    // check for upper case
    let upper = document.querySelector('input[name="upper"]:checked').value
    if (upper === "yes") {
        return true
    } else {
        return false
    }
    
    // console.log(upper)
    return upper
}

function runSpe() {
    // check for special character
    let specialCh = document.querySelector("input[name='spclC']:checked").value
    if (specialCh === "yes") {
        return true
    } else {
        return false
    }
    // console.log(specialCh)
    // return specialCh
}

function makePW(len, cap, sym) {
    
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