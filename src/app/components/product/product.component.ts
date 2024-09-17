import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProductComponent implements OnInit {
  details = false;
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe((products: IProduct[]) => {
      this.products = products;
      console.log(products);
    });
  }
}
