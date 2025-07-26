import { Component, OnInit } from '@angular/core';
import { SubscriptionService, Subscription } from '../services/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.subscriptionService.list().subscribe(data => this.subscriptions = data);
  }
}
