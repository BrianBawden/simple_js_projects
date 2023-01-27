


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
    // console.log(upper)
    return upper
}

function runSpe() {
    // check for special character
    let specialCh = document.querySelector("input[name='spclC']:checked").value
    // console.log(specialCh)
    return specialCh
}