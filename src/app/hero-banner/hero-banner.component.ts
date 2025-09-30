import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  standalone: true
})
export class HeroBannerComponent {
  @Input() image: string = '';
  @Input() url: string = '';
  @Input() title: string = '';
}