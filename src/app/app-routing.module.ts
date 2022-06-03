import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRxjsComponent } from './todo-rxjs/todo-rxjs.component';

const routes: Routes = [
  {
    path: 'normal',
    component: TodoListComponent,
  },
  {
    path: 'rxjs',
    component: TodoRxjsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
