import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { PackagesComponent } from './packages/packages.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PaymentsComponent } from './payments/payments.component';
import { RemindersComponent } from './reminders/reminders.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'reminders', component: RemindersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
