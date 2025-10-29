import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskFormPageComponent } from './pages/task-form-page/task-form-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskFormPageComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ]
})
export class TaskModule { }
