import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <h1>Gym Fees App</h1>
    <nav>
      <a routerLink="/members">Members</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
