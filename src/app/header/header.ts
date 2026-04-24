import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
isScrolled: boolean = false

@HostListener('window:scroll', [])
  onWindowScroll() {
   this.isScrolled = window.scrollY > 50
  }
}

