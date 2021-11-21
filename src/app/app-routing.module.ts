import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCmpComponent } from "./_components/test-cmp/test-cmp.component";

const routes: Routes = [
  { path: 'test', component: TestCmpComponent },
  { path: 'test-component', component: TestCmpComponent },
  { path: '', redirectTo: 'test', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
