import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  standalone : true,
  styleUrl: './hello.scss',
  template : ` <p>
  hello {{name}}
  </p>`
 
  
})

// export class Hello {
// title="AKBANK";
// }
export class Hello {
@Input() name: string ='Angular'
// @Output()  greeted= new EventEmitter<string>();
// sayHi() {
//   this.greeted.emit( ` merhaba  ${this.name}!` );
// }
}
// template:
// <p>
// Hello,{{name}}!
// </p>
// <button (click)="sayHi()">
// Selam Ver 
// <button
