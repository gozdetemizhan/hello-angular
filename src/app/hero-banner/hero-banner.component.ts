import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  // standalone: true,
  imports: [CommonModule]
})
export class HeroBannerComponent {
  @Input() image: string = '';
  @Input() url: string = '';
  @Input() title: string = '';

  message: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  onShopNowClick(): void {
    this.message = 'Shop Now button clicked!';
    this.cdr.detectChanges();
  }
}