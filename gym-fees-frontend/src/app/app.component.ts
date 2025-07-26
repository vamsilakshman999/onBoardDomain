import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Gym Fees App</h1>
    <nav>
      <a routerLink="/members">Members</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
