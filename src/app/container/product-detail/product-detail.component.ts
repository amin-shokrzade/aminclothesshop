import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    standalone: false
})
export class ProductDetailComponent implements OnInit {
  @Input() productListComp: ProductListComponent = undefined;

  product: Product;

  ngOnInit(): void {
    this.product = this.productListComp.selectedProduct;
  }
}
