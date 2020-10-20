import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [];
  editingProduct: Product;
  editing: boolean = false;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.GetProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  DeleteProduct(event, prod) {
    console.log(prod);
    if (confirm('Are you sure you want to delete it?')) {
      this.productService.DeleteProduct(prod);
    }
  }

  EditProduct(event, prod) {
    // console.log(prod)
    this.editing = !this.editing;
    this.editingProduct = prod;
  }

  UpdatedProduct() {
    console.log(this.editingProduct);
    this.productService.UpdateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }
}
