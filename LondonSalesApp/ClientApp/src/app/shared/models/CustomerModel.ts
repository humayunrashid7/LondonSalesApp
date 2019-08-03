
export class CustomerModel {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export class AddressModel {
  addressId: number;
  line1: string;
  line2: string;
  city: string;
  province: string;
  postalCode: string;
  addressType: AddressType;
  customerId: number;
}

enum AddressType {
  Mailing,
  Billing
}
