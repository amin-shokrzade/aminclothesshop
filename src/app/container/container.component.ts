import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    standalone: false
})
export class ContainerComponent {
  searchText: string = '';

  listOfNumbers: string[] = [
    'mark',
    'john',
    'jane',
    'doe',
    'smith',
    'jones',
    'hicks',
  ];

  @ViewChild(ProductListComponent) productListcomponent: ProductListComponent;

  setSearchText(el: string) {
    this.searchText = el;
  }
}
