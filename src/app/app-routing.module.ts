import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestCompComponent} from "./test-comp/test-comp.component";


const routes: Routes = [
  { path: '',   component: TestCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
