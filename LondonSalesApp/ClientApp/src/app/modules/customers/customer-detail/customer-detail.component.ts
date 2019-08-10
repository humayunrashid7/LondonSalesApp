import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CustomerModel} from '../../../shared/models/CustomerModel';
import {CustomerService} from '../../../shared/services/customer.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {

  customer: CustomerModel;
  private sub: Subscription;
  customer$: Observable<CustomerModel>;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    // Read the customer id from route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getCustomer(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCustomer(id: number) {
    this.customer$ = this.customerService.getCustomerById(id);
  }
}
