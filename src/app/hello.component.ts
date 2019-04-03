import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Welcome to {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; color: #369;}`]
})
export class HelloComponent  {
  @Input() name: string;
}
