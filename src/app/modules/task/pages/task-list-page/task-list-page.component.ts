import { Component, Input } from '@angular/core';
import { TaskModel } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent {
  @Input()
  tasks: TaskModel[] = [];

  filtro: string = '';
  filterText: string = '';

  cambiarEstado(task: TaskModel) {
    task.estado = 'completada';
  }
}
