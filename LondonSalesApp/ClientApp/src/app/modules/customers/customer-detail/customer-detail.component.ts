import {Component, Input, OnInit} from '@angular/core';
import {CustomerModel} from '../../../shared/models/CustomerModel';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() childCustomer: CustomerModel;

  constructor() { }

  ngOnInit() {
  }

  // TODO: Close the child component on click
  closeDetails() {}

}
