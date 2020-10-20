import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(products => {
      this.products = products;
      console.log(products)
    });
  }
}
