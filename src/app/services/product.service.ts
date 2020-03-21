import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL = '';
  products: Observable<any>;

  constructor(private http: HttpClient,
              private db: AngularFirestore) { }

  getProducts() {
    this.products = this.db.collection('products');
  }
}
