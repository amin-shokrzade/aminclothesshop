import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css',
    standalone: false
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  selectedFilterRadioButton: string = 'all';

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onSelectedFilterRadioButtonChange() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
    // console.log(this.selectedFilterRadioButton);
  }
}
