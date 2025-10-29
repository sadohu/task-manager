import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskFormPageComponent } from './pages/task-form-page/task-form-page.component';


@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskFormPageComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
