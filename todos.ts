class TodoList {

    public taskStatus: number;
    public editStatus: boolean;

    constructor() {

    }

    changeStatus(allTask: any[], id: number) {

        if (allTask[id].editStatus == false) {
            allTask[id].editStatus = true;
        }

        return allTask;
    }

    deleteTask(allTask: any[], id: number) {
        if (allTask[id].taskStatus == 0 || allTask[id].taskStatus == 1) {
            allTask[id].taskStatus = 2;

        }
        return allTask;
    }

    completeTask(allTask: any[], id: number) {


        if (allTask[id].taskStatus == 0) {
            allTask[id].taskStatus = 1;
        }
        return allTask;

    }


}

