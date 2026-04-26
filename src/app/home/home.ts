import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Story } from "../story/story";
import { Card } from "../card/card";

@Component({
  selector: 'app-home',
  imports: [Hero, Story, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
