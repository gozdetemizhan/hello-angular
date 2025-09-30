import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hello } from './hello/hello';
import { Banner } from './banner/banner';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Hello, Banner, HeroBannerComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AKBANK');
}


