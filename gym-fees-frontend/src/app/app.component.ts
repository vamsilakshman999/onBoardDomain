import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styles: [
    `.app-toolbar { justify-content: center; }`,
    `.title { font-weight: 600; }`,
    `.spacer { flex: 1 1 auto; }`,
    `.content { padding: 16px; }`
  ]
})
export class AppComponent {}
