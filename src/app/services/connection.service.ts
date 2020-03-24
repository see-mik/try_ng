import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private dbPath = 'customers';

  customerRef: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase) {
    this.customerRef = db.list(this.dbPath);
  }

  createCustomer(customer: any) {
    this.customerRef.push(customer);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.customerRef.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.customerRef.remove(key);
  }

  getCustomersList(): AngularFireList<any> {
    return this.customerRef;
  }

  deleteAll(): Promise<void> {
    return this.customerRef.remove();
  }
}
