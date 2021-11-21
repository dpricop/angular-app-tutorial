import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../_services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  finishTask(id: number) {

    console.log(id);
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }
}
