import { Component, OnInit } from '@angular/core';
import { SubscriptionService, Subscription } from '../services/subscription.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubscriptionDialogComponent } from './subscription-dialog.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  loading = false;

  constructor(private subscriptionService: SubscriptionService,
              private dialog: MatDialog,
              private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.subscriptionService.list().subscribe({
      next: d => this.subscriptions = d,
      error: () => this.snack.open('Failed to load subscriptions', 'Close'),
      complete: () => this.loading = false
    });
  }

  add() {
    const ref = this.dialog.open(SubscriptionDialogComponent);
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.subscriptionService.create(result).subscribe({
          next: () => { this.snack.open('Saved', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Save failed', 'Close')
        });
      }
    });
  }

  edit(sub: Subscription) {
    const ref = this.dialog.open(SubscriptionDialogComponent, { data: sub });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.subscriptionService.update(sub.id, result).subscribe({
          next: () => { this.snack.open('Updated', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Update failed', 'Close')
        });
      }
    });
  }

  remove(sub: Subscription) {
    if (confirm('Delete subscription?')) {
      this.subscriptionService.delete(sub.id).subscribe({
        next: () => { this.snack.open('Deleted', 'Close', {duration:2000}); this.load(); },
        error: () => this.snack.open('Delete failed', 'Close')
      });
    }
  }
}
