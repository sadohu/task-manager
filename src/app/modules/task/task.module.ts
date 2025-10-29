import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskFormPageComponent } from './pages/task-form-page/task-form-page.component';
import { EstadoPipe } from 'src/app/core/pipes/estado.pipe';
import { FilterTaskPipe } from 'src/app/core/pipes/filter-task.pipe';


@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskFormPageComponent,
    EstadoPipe,
    FilterTaskPipe
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ]
})
export class TaskModule { }
