import { Oneblog } from './oneblog/oneblog';
import { Blog } from './blog/blog';
import { Header } from './header/header';
import { Routes } from '@angular/router';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Header },
  { path: 'blog', component: Blog },
  { path: 'blog/article', component: Oneblog },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: 'notfound' },
];
