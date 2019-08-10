import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerModel} from '../../../shared/models/CustomerModel';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CustomerService} from '../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.css']
})
export class CustomerEditorComponent implements OnInit, OnDestroy {

  pageTitle = 'Customer Form';
  cardHeader = 'Sign up!';
  customerForm: FormGroup;

  customer = new CustomerModel();
  sub: Subscription;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(45)]],
      lastName: ['', [Validators.required, Validators.maxLength(45)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      line1: '',
      line2: '',
      city: '',
      province: '',
      postalCode: ''
    });

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

  getCustomer(id: number): void {
    this.customerService.getCustomerById(id).subscribe(
      (customer: CustomerModel) => this.displayCustomer(customer)
    );
  }

  displayCustomer(customer: CustomerModel): void {
    if (this.customerForm) {
      // The condition above checks if the form is already dirty, touched etc.
      this.customerForm.reset();
    }
    this.customer = customer;

    if (this.customer.customerId === 0) {
      this.cardHeader = 'Add New Customer';
    } else {
      this.cardHeader = `Edit Customer: ${this.customer.firstName} ${this.customer.lastName}`;
    }

    // Update the data on the form
    this.customerForm.patchValue({
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      email: this.customer.email,
      phone: this.customer.phone,
      line1: this.customer.line1,
      line2: this.customer.line2,
      city: this.customer.city,
      province: this.customer.province,
      postalCode: this.customer.postalCode,
    });
  }

  saveCustomer(): void {
    if (this.customerForm.valid) {
      if (this.customerForm.dirty) {
        const c = {...this.customer, ...this.customerForm.value};

        if (c.customerId === 0) {
          this.customerService.createCustomer(c).subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = error
          );
        } else {
          this.customerService.updateCustomer(c).subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = error
          );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  deleteCustomer(): void {
    if (this.customer.customerId === 0) {
      // No need to delete, as it was never saved
      this.onSaveComplete();
    } else {
      if (confirm(`Warning: delete customer: ${this.customer.firstName} ${this.customer.lastName}?`)) {
        this.customerService.deleteCustomer(this.customer.customerId).subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = error
        );
      }
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear flags
    this.customerForm.reset();
    this.router.navigate(['/customers']);
  }
}
