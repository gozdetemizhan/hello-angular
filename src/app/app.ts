import { Component, signal } from '@angular/core';
import { Hello } from './hello/hello';

@Component({
  selector: 'app-root',
  imports: [Hello],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AKBANK');
}
  
// export class App{
//   title='AKBANK'
// }

// onGreet

