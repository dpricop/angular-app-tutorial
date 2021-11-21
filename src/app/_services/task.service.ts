import { Injectable } from '@angular/core';

export interface Task {
  id: number
  title: string
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //TODO fetchData from https://jsonplaceholder.typicode.com/todos
  constructor() { }

  public myTasks: Task[] = [
    {id: 1, title: "Angular Intro", completed: false},
    {id: 2, title: "Angular Routing", completed: true},
    {id: 3, title: "Angular Material", completed: false}
  ]

  addTask(task: Task){
    //TODO
  }

  finishTask(id:number){
    //TODO
  }

  removeTask(id:number){
    this.myTasks = this.myTasks.filter(t => t.id !== id)
  }

}
