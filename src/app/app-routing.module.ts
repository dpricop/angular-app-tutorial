import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCmpComponent } from "./_components/test-cmp/test-cmp.component";
import {TaskComponent} from "./_components/task/task.component";

const routes: Routes = [
  { path: 'test', component: TestCmpComponent },
  { path: 'test-component', component: TestCmpComponent },
  { path: 'tasks', component: TaskComponent },
  { path: '', redirectTo: 'test', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
