import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterOutlet],
  template: 'Child',
})
export class ChildComponent {}
