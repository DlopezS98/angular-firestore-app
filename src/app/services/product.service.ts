import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsCollection;
  products: Observable<Product[]>;
  ProductDoc;

  constructor(public db: AngularFirestore) {
    this.products = this.db.collection('Products').valueChanges();
  }

  GetProducts(){
    return this.products;
  }
}
