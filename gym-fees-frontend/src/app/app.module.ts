// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';   // <-- for forms (if needed)
import { RouterModule, Routes } from '@angular/router'; // <-- routing support

import { AppComponent } from './app.component';
import { MemberService } from './services/member.service';

const routes: Routes = [
  { path: '', component: AppComponent }  // basic route to avoid blank page
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // for API calls
    FormsModule,        // for form binding
    RouterModule.forRoot(routes) // setup routing
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
