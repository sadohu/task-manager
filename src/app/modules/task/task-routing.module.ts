import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskFormPageComponent } from './pages/task-form-page/task-form-page.component';

const routes: Routes = [
  { path: 'tasks', component: TaskFormPageComponent },
  // { path: 'tasks/list', component: TaskListPageComponent },
  // { path: 'tasks/form', component: TaskFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
