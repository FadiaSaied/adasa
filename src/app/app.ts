import { Component, signal } from '@angular/core';

import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';

import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('adasa');
  ngOnInit(): void {
    initFlowbite();
  }
}
