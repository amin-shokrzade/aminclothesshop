import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {


  @ViewChild('para') paraghEl:ElementRef;


  stylePara(){
    console.log(this.paraghEl.nativeElement);
  }
}
