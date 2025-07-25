import { Component, OnInit } from '@angular/core';
import { PaymentService, Payment } from '../services/payment.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentDialogComponent } from './payment-dialog.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit {
  payments: Payment[] = [];
  loading = false;

  constructor(private paymentService: PaymentService,
              private dialog: MatDialog,
              private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.paymentService.list().subscribe({
      next: d => this.payments = d,
      error: () => this.snack.open('Failed to load payments', 'Close'),
      complete: () => this.loading = false
    });
  }

  add() {
    const ref = this.dialog.open(PaymentDialogComponent);
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.paymentService.create(result).subscribe({
          next: () => { this.snack.open('Saved', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Save failed', 'Close')
        });
      }
    });
  }

  edit(pay: Payment) {
    const ref = this.dialog.open(PaymentDialogComponent, { data: pay });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.paymentService.update(pay.id, result).subscribe({
          next: () => { this.snack.open('Updated', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Update failed', 'Close')
        });
      }
    });
  }

  remove(pay: Payment) {
    if (confirm('Delete payment?')) {
      this.paymentService.delete(pay.id).subscribe({
        next: () => { this.snack.open('Deleted', 'Close', {duration:2000}); this.load(); },
        error: () => this.snack.open('Delete failed', 'Close')
      });
    }
  }
}
