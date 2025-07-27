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
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { MembersComponent } from './members/members.component';
import { MemberDialogComponent } from './members/member-dialog.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageDialogComponent } from './packages/package-dialog.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionDialogComponent } from './subscriptions/subscription-dialog.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDialogComponent } from './payments/payment-dialog.component';
import { RemindersComponent } from './reminders/reminders.component';

import { AppComponent } from './app.component';

@NgModule({
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
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    AppRoutingModule,
    AppComponent,
    MembersComponent,
    MemberDialogComponent,
    PackagesComponent,
    PackageDialogComponent,
    SubscriptionsComponent,
    SubscriptionDialogComponent,
    PaymentsComponent,
    PaymentDialogComponent,
    RemindersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
