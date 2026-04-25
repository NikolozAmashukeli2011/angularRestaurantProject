import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Story } from "../story/story";

@Component({
  selector: 'app-home',
  imports: [Hero, Story],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
