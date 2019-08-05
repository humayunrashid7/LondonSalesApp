import { Component, OnInit } from '@angular/core';
import {CustomerModel} from '../../../shared/models/CustomerModel';
import {CustomerService} from '../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  currentCustomer: CustomerModel;
  customers: CustomerModel[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(
      (customers: CustomerModel[]) => this.customers = customers
    );
  }

  getCustomerDetails(customer: CustomerModel) {
    this.currentCustomer = customer;
  }

}
