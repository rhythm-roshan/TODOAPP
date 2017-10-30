var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.changeStatus = function (allTask, id) {
        if (allTask[id].editStatus == false) {
            allTask[id].editStatus = true;
        }
        return allTask;
    };
    TodoList.prototype.deleteTask = function (allTask, id) {
        if (allTask[id].taskStatus == 0 || allTask[id].taskStatus == 1) {
            allTask[id].taskStatus = 2;
        }
        return allTask;
    };
    TodoList.prototype.completeTask = function (allTask, id) {
        if (allTask[id].taskStatus == 0) {
            allTask[id].taskStatus = 1;
        }
        return allTask;
    };
    return TodoList;
}());
