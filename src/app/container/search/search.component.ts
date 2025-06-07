import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    standalone: false
})
export class SearchComponent {
  searchText: string = '';
  @ViewChild('searchInputText') searchInputEl: ElementRef;

  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onSearchTextChanged() {}

  updateSearchText() {
    // console.log(inputEl.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    //Notice that we are emitting the searchText value to the parent component.
    this.searchTextChanged.emit(this.searchText);
  }
}
