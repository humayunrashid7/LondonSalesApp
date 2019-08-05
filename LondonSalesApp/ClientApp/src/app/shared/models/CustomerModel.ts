
export class CustomerModel {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  customerSince: Date;
  line1?: string;
  line2?: string;
  city?: string;
  province?: string;
  postalCode?: string;
}
