import { Component, OnInit } from '@angular/core';
import {CustomerModel} from '../../../shared/models/CustomerModel';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  currentCustomer: CustomerModel;
  customers: CustomerModel[] = [];
  customer1: CustomerModel = {
    customerId: 1,
    firstName: 'Humayun',
    lastName: 'Rashid',
    email: 'humayun@gmail.com',
    phone: '647-109-0987',
    customerSince: new Date(2010, 1)
  };

  customer2: CustomerModel = {
    customerId: 2,
    firstName: 'Zoya',
    lastName: 'Rashid',
    email: 'zoya@gmail.com',
    phone: '647-109-2198',
    customerSince: new Date(2012, 8)
  };

  constructor() { }

  ngOnInit() {
    this.customers.push(this.customer1, this.customer2);
  }

  getCustomerDetails(customer: CustomerModel) {
    this.currentCustomer = customer;
  }

}
