var StatusENUM = {
    ACTIVE: 0,
    COMPLETED: 1,
    DELETED: 2
};

var allTask = JSON.parse(localStorage.getItem('KEY')) || [];
var listActive = document.getElementById('listActive');
var listCompleted = document.getElementById('listCompleted');
var listDeleted = document.getElementById('listDeleted');

window.onload = function () {

    var btn = document.getElementById('btn');
    var task = document.getElementById('addTask');

    display();
    btn.onclick = function () {

        if (task.value != "") {
            var addTask = {
                data: task.value,
                taskStatus: 0,
                editStatus: false
            };
            allTask.push(addTask);
            localStorage.setItem('KEY', JSON.stringify(allTask));
            display();

        }
        console.log(allTask);
    }
}
var todo = new TodoList();

function display() {

    var htmlData = "";
    var x = " ";
    var y = " ";
    console.log("all");
    listActive.innerHTML = htmlData;
    for (var i = 0; i < allTask.length; i++) {
        if (allTask[i].taskStatus == 0) {

            if (!(allTask[i].editStatus)) {
                htmlData += '<li  style = "margin-top:10px" class = "list-group-item list-group-item-info" >' + allTask[i].data + '</li>';
            }
            else {

                htmlData += '<li  style = "margin-top:10px" class = "list-group-item list-group-item-info">';
                htmlData += '<input type="text" id="change' + i + '" value="' + allTask[i].data + '">';
                htmlData += '</li>';
            }
            htmlData += '<div class = "container-fluid">'
            htmlData += '<ul class="list-inline">'
            htmlData += '<li  style = "margin-top:10px" class="list-inline-item" > <button style="color:limegreen" onclick= "completeTask(' + i + ')"><i class="glyphicon glyphicon-ok-circle"></i> Completed </button> </li>';
            htmlData += '<li   style = "margin-top:10px" class="list-inline-item"> <button style="color:red"onclick= "deleteTask(' + i + ')"><i class="glyphicon glyphicon-remove-circle"></i> Delete </button> </li>';
            htmlData += '<li  style = "margin-top:10px" class="list-inline-item"> <button style="color:lightskyblue"onclick= "editTask(' + i + ')"><i class="glyphicon glyphicon-edit"></i>Edit </button> </li>';
            htmlData += '</ul>'
            htmlData += '</div>'


            listActive.innerHTML = htmlData;

        }

        if (allTask[i].taskStatus == 1) {

            x += '<li class="list-group-item list-group-item-success">' + allTask[i].data + '</li>';
            listCompleted.innerHTML = x;

        }

        if (allTask[i].taskStatus == 2) {

            y += '<li class="list-group-item list-group-item-danger">' + allTask[i].data + '</li>';
            listDeleted.innerHTML = y;
        }
    }


}

function changeStatus(id) {
    var tempTask = todo.changeStatus(allTask, id);
    display();
    localStorage.setItem('KEY', JSON.stringify(tempTask));

}

function editTask(id) {

    if (allTask[id].editStatus == true) {
        allTask[id].data = document.getElementById('change' + id).value;
        allTask[id].editStatus = false;
    }
    else {
        allTask[id].editStatus = true;
    }
    display();
    localStorage.setItem('KEY', JSON.stringify(allTask));

}

function deleteTask(id) {
    var tempTask = todo.deleteTask(allTask, id);
    display();
    localStorage.setItem('KEY', JSON.stringify(tempTask));

}

function completeTask(id) {

    var tempTask = todo.completeTask(allTask, id);
    localStorage.setItem('KEY', JSON.stringify(tempTask));
    display();


}