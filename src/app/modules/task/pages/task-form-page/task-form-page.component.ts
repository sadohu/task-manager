import { Component } from '@angular/core';
import { TaskModel } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-form-page',
  templateUrl: './task-form-page.component.html',
  styleUrls: ['./task-form-page.component.css']
})
export class TaskFormPageComponent {
  task: TaskModel = {
    titulo: '',
    descripcion: ''
  };

  taskList: TaskModel[] = [];


  saveTask() {
    this.task.estado = 'pendiente';
    console.log('Tarea guardada:', this.task);
    this.taskList.push(this.task);
    this.clearForm();
  }

  clearForm() {
    this.task = {
      titulo: '',
      descripcion: ''
    };
  }


}
