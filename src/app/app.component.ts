import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';

interface UserInterface {
  id: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isVisible = false
  prefetchCondition = false

  users = signal<UserInterface[]>([
    { id: '1', name: 'foo', role: 'developer' },
    { id: '2', name: 'bar', role: 'admin' },
    { id: '3', name: 'baz', role: 'qa' },
  ]);

  user = this.users()[2];
}
