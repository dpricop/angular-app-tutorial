import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../_services/task.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public isLoading: boolean = true;
  public taskTitle: string = "";

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.fetchData().pipe(delay(2000)).subscribe(() => {
      this.isLoading = false;
    })
  }

  addTask() {
    const newTask = {id: 1, title: this.taskTitle, completed: false};
    this.taskService.insertTask(newTask);
    this.taskTitle = "";
  }

  finishTask(id: number) {
    this.taskService.finishTask(id);
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }
}
