import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerModel} from '../models/CustomerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = '/api/customers';
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.baseUrl);
  }

  getCustomerById(id: number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: CustomerModel): Observable<number> {
    return this.http.post<number>(this.baseUrl, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateCustomer(customer: CustomerModel): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${customer.customerId}`, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
