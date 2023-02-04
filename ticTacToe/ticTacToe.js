

let space = "X"

function addLetter(id){
    // let tr = document.querySelector("#tr");

        document.querySelector("#" + id).innerHTML = space;

        if (space === "X") {
            space = "O"
        } else if (space === "O") {
            space = " "
        } else {
            space = "X"
        };

        checkWinner();

}

function checkWinner() {
    let tr = document.querySelector("#tr").innerText;
    let tm = document.querySelector("#tm").innerText;
    let tl = document.querySelector("#tl").innerText;
    let mr = document.querySelector("#mr").innerText;
    let mm = document.querySelector("#mm").innerText;
    let ml = document.querySelector("#ml").innerText;
    let br = document.querySelector("#br").innerText;
    let bl = document.querySelector("#bl").innerText;
    let bm = document.querySelector("#bm").innerText;

}