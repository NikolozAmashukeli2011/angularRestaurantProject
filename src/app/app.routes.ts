import { Home } from './home/home';
import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { Menu } from './menu/menu';

export const routes: Routes = [
{
 path: "",
 component: Home
},

{
 path: "menu",
 component: Menu
},

{
 path: "**",
 component: NotFound
},
];
