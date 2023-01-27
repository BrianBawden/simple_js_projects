
function newExpense() {
    console.log("newExpense clicked")
    const table = document.getElementById("table")
    const tr = document.createElement("tr")
    const td = document.createElement("td")

    let date = document.getElementById("getDate").value
    let createDate = document.createTextNode(date)
    let description = document.getElementById("getDescription").value
    let createDescription = document.createTextNode(description)
    let amount = document.getElementById("getAmount").value
    let createAmount = document.createTextNode(amount)
    
    console.log(date, description, amount)

    td.appendChild(createDescription)
    td.appendChild(createDate)
    td.appendChild(createAmount)
    tr.appendChild(td)
    table.appendChild(tr)
    // td.appendChild(createDescription)
    // tr.appendChild(td)
    // table.appendChild(tr) 
    // td.appendChild(createAmount)
    // tr.appendChild(td)
    // table.appendChild(tr)
}