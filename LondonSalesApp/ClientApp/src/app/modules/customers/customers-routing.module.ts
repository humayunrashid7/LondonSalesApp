import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerHomeComponent} from './customer-home/customer-home.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    // children: [
    //   {
    //     path: '',
    //     component: CustomerListComponent,
    //     outlet: 'list'
    //   },
    //   {
    //     path: '',
    //     component: CustomerDetailComponent,
    //     outlet: 'detail'
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
