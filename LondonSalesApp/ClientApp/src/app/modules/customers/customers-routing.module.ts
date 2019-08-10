import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerEditorComponent} from './customer-editor/customer-editor.component';

const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path: ':id', component: CustomerDetailComponent},
  {
    path: ':id/edit',
    component: CustomerEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
