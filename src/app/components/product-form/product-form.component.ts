import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product = {} as Product;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

  createProduct() {
    console.log(this.product);
    if (
      this.product.name !== '' &&
      this.product.description !== '' &&
      this.product.price !== 0
    ) {
      this.productService.CreateProduct(this.product);
      this.product = {} as Product;
    }
  }
}
