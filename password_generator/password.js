


function run(){
    // get length for password
    let pwLength =document.querySelector("#passLength");
    let pwLOutput = pwLength.value;
    
    // console.log(pwLOutput)

    // check for upper case
    let upper = document.querySelector('input[name="upper"]:checked').value
    // console.log(upper)

    // check for special character
    let specialCh = document.querySelector("input[name='spclC']:checked").value
    // console.log(specialCh)

};
