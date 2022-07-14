import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> Hola Mundo!</h1>`,
  styles: [`h1 { font-float: lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
