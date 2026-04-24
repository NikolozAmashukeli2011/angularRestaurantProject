import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Hero } from "./hero/hero";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('finalAngProject');
}
