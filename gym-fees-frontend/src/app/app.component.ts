import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary" class="app-toolbar">
      <span class="title">Gym Fees App</span>
    </mat-toolbar>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `.app-toolbar { justify-content: center; }`,
    `.title { font-weight: 600; }`,
    `.content { padding: 16px; }`
  ]
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
