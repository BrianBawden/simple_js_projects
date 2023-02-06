

let space = "X"

function addLetter(id){
    // let tr = document.querySelector("#tr");

        document.querySelector("#" + id).innerHTML = space;

        checkWinner();


        if (space === "X") {
            space = "O"
        } else {
            space = "X"
        };


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

    switch ("X") {
        case tl && tm && tr:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
        case ml, mm, mr:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
        case bl, bm, br:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
        case tl, mm, br:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
        case tr, mm, bl:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
        case tl, ml, bl:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
        case tm, mm, bm:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
        case tr, mr, br:
            document.querySelector("#winner").innerHTML = space + " is the WINNER";
            break
    }

}