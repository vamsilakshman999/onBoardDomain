import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Payment } from '../services/payment.service';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html'
})
export class PaymentDialogComponent {
  form = this.fb.group({
    paidAmount: [0, Validators.required],
    paidOn: [null, Validators.required],
    refundedAmount: [0],
    refundReason: ['']
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<PaymentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Payment | null) {
    if (data) {
      this.form.patchValue(data);
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    }
  }
}
