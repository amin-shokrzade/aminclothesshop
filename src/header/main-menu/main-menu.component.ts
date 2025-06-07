import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.css',
    standalone: false
})
export class MainMenuComponent {
  mainMenus: string[] = ['Home', 'Products', 'myOrder', 'About', 'Contact'];
}
