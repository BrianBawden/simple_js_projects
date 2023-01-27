
const table = document.getElementById("table")


function newExpense() {
    let date = document.getElementById("getDate").value
    let description = document.getElementById("getDescription").value
    let amount = document.getElementById("getAmount").value

    let template = '<tr> <td>' + date + '</td> <td>' + description + '</td> <td>' + '$' + amount + '</td> </tr> ';
    table.innerHTML += template;
    
    document.getElementById("getDate").value =''
    document.getElementById("getDescription").value =''
    document.getElementById("getAmount").value =''
}