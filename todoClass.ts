import {todointerface} from './todointerface';

class Todo implements todointerface {

    constructor()[]
    tasks: Array<string> = [];

    addTask(task:string):number{
        let count: number = this.tasks.push(task);
        console.log("Item " + task + " added to array Tasks");
        return count;
    }

    listAllItems(): void{
        this.tasks.forEach(function (tasks) => {
            console.log(tasks);
        })
    }

    deleteTask(task: string): number{
        let index: number = this.tasks.indexOf(task);
        if (index > -1) {
           this.tasks.splice(index, 1);
            console.log("Item " +task+ " removed from array tasks");
        }
        return this.tasks.length;
    }
    }

    let myTodos = new Todo();
    myTodos.addTask("Work");
    myTodos.addTask("Sleep");
    myTodos.listAllItems();
    myTodos.deleteTask("Sleep");
