

let space = "X"
function addLetter(id){

        document.querySelector("#" + id).innerHTML = space;

        if (space === "X") {
            space = "O"
        } else if (space === "O") {
            space = " "
        } else {
            space = "X"
        }
}

