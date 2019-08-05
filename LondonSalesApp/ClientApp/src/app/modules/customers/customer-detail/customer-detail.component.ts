import {Component, Input, OnInit} from '@angular/core';
import {CustomerModel} from '../../../shared/models/CustomerModel';
import {CustomerService} from '../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() childCustomer: CustomerModel;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  // TODO: Close the child component on click
  closeDetails() {}

  deleteCustomer(customerId: number) {
    this.customerService.deleteCustomer(customerId).subscribe();
  }
}
