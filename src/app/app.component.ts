import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<h1>Curso Angular</h1>`,
  styles: [`h1{
    color: grey
  }  `]
})
export class AppComponent {
  title = 'angular_curso';
}
