import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export interface Task {
  id: number
  title: string
  completed: boolean
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  public dataSource: Task[] = [];
  constructor(private httpClient: HttpClient) { }

  fetchData(): Observable<Task[]>{
    return this.httpClient.get<Task[]>("https://jsonplaceholder.typicode.com/todos?_limit=3").pipe(tap(( todos) => this.dataSource = todos));
  }

  insertTask(task: Task){
    const lastTaskId = this.dataSource.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
    task.id += lastTaskId;
    this.dataSource.push(task);
  }

  finishTask(id: number){
    const task = this.dataSource.find((t) => t.id === id);
    if(task)
      task.completed = true;
  }

  removeTask(id: number){
    this.dataSource = this.dataSource.filter(t => t.id !== id)
  }
}
