// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';   // <-- for forms (if needed)
import { AppRoutingModule } from './app-routing.module';
import { MembersComponent } from './members/members.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // for API calls
    FormsModule,        // for form binding
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
