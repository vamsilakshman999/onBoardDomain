import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Gym Fees App</a>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/members">Members</a>
        </div>
      </div>
    </nav>
    <div class="container my-4">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
