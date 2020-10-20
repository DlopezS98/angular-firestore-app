import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  ProductDoc: AngularFirestoreDocument<Product>;

  constructor(public db: AngularFirestore) {
    // this.products = this.db.collection('Products').valueChanges();
    this.productsCollection = this.db.collection('Products');
    this.products = this.productsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  CreateProduct(product: Product) {
    this.productsCollection.add(product);
  }

  GetProducts() {
    return this.products;
  }

  DeleteProduct(product: Product) {
    //Nombre de la collección en la BD de firebase
    this.ProductDoc = this.db.doc(`Products/${product.id}`);
    this.ProductDoc.delete();
  }

  UpdateProduct(product: Product) {
    this.ProductDoc = this.db.doc(`Products/${product.id}`);
    this.ProductDoc.update(product);
  }
}
