import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    console.log('Toggle menu clicked', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }
}
