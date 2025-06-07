import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  

  @ViewChild('para') paraghEl:ElementRef

  styleParag() {
    console.log(this.paraghEl.nativeElement);
    
  }
}
