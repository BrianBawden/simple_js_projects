
console.log("connected")
function new_task() {
    console.log("clicked")
    let ol = document.getElementById("todo_list");
    let li = document.createElement("li");
    // let del = document.createElement("button").value = "delete";
    let text = document.getElementById("new_task").value;
    let task = document.createTextNode(text);


    li.appendChild(task);
    ol.appendChild(li);

    document.getElementById("new_task").value = ''


}

function delete_all(){
    console.log("good bye")
    let ol = document.getElementById("todo_list")
    ol.remove();
}

function delete_task() {
    let del_num = document.getElementById("del_task").value
    let ol = document.getElementById("todo_list")
    ol.removeChild(ol.childNodes[del_num])
    document.getElementById("del_task").value = ''
}
