// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   // <-- for forms (if needed)
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { MembersComponent } from './members/members.component';
import { PackagesComponent } from './packages/packages.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PaymentsComponent } from './payments/payments.component';
import { RemindersComponent } from './reminders/reminders.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    PackagesComponent,
    SubscriptionsComponent,
    PaymentsComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,   // for API calls
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
